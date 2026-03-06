import React from 'react'
// import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
export default function layout( {
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        {children}
  
    </div>
  )
}




