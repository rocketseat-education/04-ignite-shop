import axios from "axios";
import Image from "next/future/image";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useShoppingCart } from "use-shopping-cart";
import {
  BodyContainer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  LineItem,
  Item,
  ItemImageContainer,
  LeftInfo,
  RightInfo,
  FooterContainerInfo,
} from "../styles/components/bag-drawer";

interface BagDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

interface CartDetailsType {
  currency: string;
  description: string;
  formattedPrice: string;
  formattedValue: string;
  id: string;
  name: string;
  price: number;
  price_data: Object;
  product_data: {
    defaultPriceId: string;
    id: string;
    name: string;
    imageUrl: string;
    price: unknown;
    description: string;
  };
  quantity: number;
  value: number;
}

const LineItems = () => {
  const { removeItem, cartDetails, cartCount } = useShoppingCart();

  return (
    <LineItem>
      <h2>Sacola de compras</h2>
      {cartCount === 0 ? (
        <h5>Sua sacola está vazia, vamos ás compras?</h5>
      ) : (
        Object.values(cartDetails).map((item: CartDetailsType) => (
          <Item key={item.id}>
            <ItemImageContainer>
              <Image
                src={item.product_data.imageUrl}
                alt=""
                width={102}
                height={102}
              />
            </ItemImageContainer>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <h4>{item.name}</h4>-<h4>{item.formattedPrice}</h4>
              </div>
              <h6>
                Quantidade: {item.quantity} - {item.formattedValue}
              </h6>
              <button onClick={() => removeItem(item.id)}>remover</button>
            </div>
          </Item>
        ))
      )}
    </LineItem>
  );
};

export const BagDrawer = ({ isOpen, toggleDrawer }: BagDrawerProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    React.useState(false);
  const { cartCount, cartDetails } = useShoppingCart();

  async function handleCheckOut() {
    const productsToCheckOut = Object.values(cartDetails).map(
      (item: CartDetailsType) => {
        return {
          price: item.product_data.defaultPriceId,
          quantity: item.quantity,
        };
      }
    );

    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: productsToCheckOut,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  const cartTotalValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    Object.values(cartDetails).reduce(
      (acc, item: CartDetailsType) => acc + item.value / 100,
      0
    )
  );

  const checkOutButtonShouldBeDisabled =
    isCreatingCheckoutSession || cartCount === 0;

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="bag-drawer"
    >
      <BodyContainer>
        <DrawerHeader>
          <button onClick={toggleDrawer}>fechar</button>
        </DrawerHeader>
        <DrawerContent>
          <LineItems />
        </DrawerContent>
        <DrawerFooter>
          <FooterContainerInfo>
            <LeftInfo>
              <h6>Quantidade</h6>
              <h3>Valor Toral</h3>
            </LeftInfo>
            <RightInfo>
              <h6>{cartCount} itens</h6>
              <h3>{cartTotalValue}</h3>
            </RightInfo>
          </FooterContainerInfo>
          <button
            disabled={checkOutButtonShouldBeDisabled}
            onClick={handleCheckOut}
          >
            Finalizar Compra
          </button>
        </DrawerFooter>
      </BodyContainer>
    </Drawer>
  );
};
