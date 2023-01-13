import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { CartProvider } from "use-shopping-cart";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

import Image from "next/future/image";
import { Bag } from "../components/Bag";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      shouldPersist={false}
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency="BRL"
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <Bag hasBadge />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}

export default App;
