import React from 'react'
import ProductCard from './Productcard/page';
import { Productservice } from '../Service/product-service';
export default async function Product() {

const products= await Productservice.getallproducts()

return (

<div className="container mt-4">
      
      {/* <h4 className="text-center mb-4">Products</h4> */}

      <div className="d-flex flex-wrap justify-content-center">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  )
}






















{/* <div>
    <h1>
        <div>
        {
            
        products.map((p:any)=>{
       return(
        <div className='container'>
       
       <ProductCard key={p.id} product={p}></ProductCard>
       
    //    <div><h3>{p.title}</h3>
    //    <img src={p.image} alt="" width={100}/></div>
        })
        
       }
       </div>
        </div>
    </h1>
 </div>       
);
}
 */}



