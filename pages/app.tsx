import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

