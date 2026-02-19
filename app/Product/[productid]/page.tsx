import { Productservice } from "@/app/Service/product-service"

export default async function Detailpage(props:any) {
    // console.log(props)
    const param=await props.params
    const prodid=param.productid

    const singleproduct=await Productservice.getproductbyid(prodid)

  return (
       <div>
   
      <div className="container mt-4">
      <div className="card p-3 text-center">
       <img
          src={singleproduct.image}
          alt={singleproduct.title}
          style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          className="mx-auto"
        />

          <div className="card-body">
          <h4>{singleproduct.title}</h4>
          <h5 className="text-success">₹{singleproduct.price}</h5>
          <p className="text-muted">{singleproduct.description}</p>
           <p className="text-muted">{singleproduct.category}</p>
        </div>
</div>
    </div>
</div>
  )
}





