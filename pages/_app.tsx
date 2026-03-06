import type { AppProps } from "next/app";
import Navbar from "../app/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { AuthProvider } from "@/app/context/AuthContext";
import { CartProvider } from "@/app/context/CartContext";
import Footer from '../app/components/Footer'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <AuthProvider> */}
    <CartProvider>
      <Navbar/>
      <Component {...pageProps} />
      </CartProvider>
      {/* </AuthProvider> */}
      <Footer/>
    </>
  )
}

