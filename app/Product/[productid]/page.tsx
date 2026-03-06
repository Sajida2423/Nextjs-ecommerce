// import { Productservice } from "@/app/Service/product-service";
// import AddToCartButton from "@/app/components/AddToCartButton";

// export default async function Detailpage(props: any) {
//   const param = await props.params;
//   const prodid = param.productid;

//   const singleproduct = await Productservice.getproductbyid(prodid);

//   return (
//     <div className="container mt-3 d-flex flex-column min-vh-100">
//       <div className="card p-3 shadow " style={{backgroundColor:"#f8e6f0"}}>
//         <div className="row">
     
//           <div className="col-md-5 text-center">
//             <img
//               src={singleproduct.image}
//               alt={singleproduct.title}
//               className="img-fluid"
//               style={{ height: "180px", objectFit: "contain" }}
//             />
//           </div>

     
//           <div className="col-md-7">
//             <h3 className="mb-3">{singleproduct.title}</h3>
//             <h4 className="text-success mb-3">₹{singleproduct.price}</h4>

//             <p className="mb-2">
//               <strong>Category:</strong> {singleproduct.category}
//             </p>

//             <p className="text-muted mb-4">{singleproduct.description}</p>

    
//             <div className="d-flex align-items-center gap-3">
//               <AddToCartButton product={singleproduct} />
        
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import AddToCartButton from "@/app/components/AddToCartButton";
import { Productservice, product } from "@/app/Service/product-service";

export default async function Detailpage({ params }: any) {
  // Await params if it is a promise
  const resolvedParams = await params;
  const { productid } = resolvedParams;
  const id = Number(productid);

  // Fetch single product
  const singleproduct: product | null = await Productservice.getproductbyid(id);

  if (!singleproduct) return <p>Product not found</p>;

  return (
    <div className="container mt-3 d-flex flex-column min-vh-100">
      <div className="card p-3 shadow" style={{ backgroundColor: "#f8e6f0" }}>
        <div className="row">
          <div className="col-md-5 text-center">
            <img
              src={singleproduct.images[0]}
              alt={singleproduct.title}
              width={250}
              height={250}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <h3>{singleproduct.title}</h3>
            <h4 className="text-success">₹{singleproduct.price}</h4>
            <p>{singleproduct.description}</p>
            <AddToCartButton
              product={{
                ...singleproduct,
                quantity: 1,
                image: singleproduct.images[0],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}