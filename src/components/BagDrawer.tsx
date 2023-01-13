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
} from "../styles/components/bag-drawer";

interface BagDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const fake = [
  {
    is: 1,
    name: "Camiseta Da hora",
    price: "$20.00",
  },
  {
    id: 2,
    name: "Camiseta Massinha",
    price: "$20.00",
  },
];

const LineItems = () => {
  return (
    <LineItem>
      <h2>Sacola de compras</h2>
      {fake.map((item) => (
        <Item key={item.id}>
          <ItemImageContainer>
            <Image
              src={
                "https://31270.cdn.simplo7.net/static/31270/sku/camisetas-camiseta-raglan-branca-com-manga-preta-de-poliester-para-sublimacao--p-1569938167978.jpg"
              }
              alt=""
              width={102}
              height={102}
            />
          </ItemImageContainer>
          <div>
            <h4>{item.name}</h4>
            <h3>{item.price}</h3>
            <button onClick={() => alert("REMOVEU!")}>remover</button>
          </div>
        </Item>
      ))}
    </LineItem>
  );
};

export const BagDrawer = ({ isOpen, toggleDrawer }: BagDrawerProps) => {
  const { cartDetails } = useShoppingCart();
  console.log(cartDetails);

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="bag-drawer"
    >
      <BodyContainer>
        <DrawerHeader>X</DrawerHeader>
        <DrawerContent>
          <LineItems />
        </DrawerContent>
        <DrawerFooter>
          <div>
            <div>
              <h6>quantidade</h6>
              <h3>Valor Toral</h3>
            </div>
            <div>
              <h6>3 itens</h6>
              <h3>R$ 270</h3>
            </div>
          </div>
          <button /* disabled={isCreatingCheckoutSession} onClick={addTobag }*/>
            Finalizar Compra
          </button>
        </DrawerFooter>
      </BodyContainer>
    </Drawer>
  );
};
