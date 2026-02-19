import React from 'react'
export default function layout( {
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        {/* this is product layout page */}    
        {children}
    </div>
  )
}
