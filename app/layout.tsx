
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { CartProvider } from "./context/CartContext";
// import { AuthProvider } from "./context/AuthContext";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="d-flex flex-column min-vh-100">
//         <AuthProvider>
//           <CartProvider>           
//             <Navbar />
//               {children}
//             <Footer />
//           </CartProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>SmartCart</title>
      </head>
      <body className="d-flex flex-column min-vh-100">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-grow-1">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}