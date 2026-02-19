import ProductCard from "../ProductCard";
import { Productservice } from "@/app/Service/product-service";

export default function Product({ products }: any) {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const products = await Productservice.getallproducts()

  return {
    props: {
            products
           }
  }
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



