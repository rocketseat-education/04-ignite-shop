import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
