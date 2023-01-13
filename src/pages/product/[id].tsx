import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: Stripe.Price;
    description: string;
    defaultPriceId: string;
    currency: "BRL" | "USD";
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const { addItem, cartDetails } = useShoppingCart();

  console.log("cartDetails", cartDetails);

  /* async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  } */

  const addTobag = () => {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price.unit_amount,
      currency: product.price.currency,
    });
  };

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price.unit_amount / 100);

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formattedPrice}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={addTobag}>
            Adicinar a sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_MLH5Wy0Y97hDAC" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
