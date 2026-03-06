import { Productservice } from "@/app/Service/product-service";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function Detailpage(props: any) 

{
  const param = await props.params;
  const prodid = param.productid;
  const singleproduct = await Productservice.getproductbyid(prodid);

  return (
    <div className="container mt-3 d-flex flex-column min-vh-100">
      <div className="card p-3 shadow " style={{backgroundColor:"#f8e6f0"}}>
        <div className="row">
     
          <div className="col-md-5 text-center">
            <img
              src={singleproduct.image}
              alt={singleproduct.title}
              className="img-fluid"
              style={{ height: "180px", objectFit: "contain" }}
            />
          </div>

     
          <div className="col-md-7">
            <h3 className="mb-3">{singleproduct.title}</h3>
            <h4 className="text-success mb-3">₹{singleproduct.price}</h4>

            <p className="mb-2">
              <strong>Category:</strong> {singleproduct.category}
            </p>

            <p className="text-muted mb-4">{singleproduct.description}</p>

    
            <div className="d-flex align-items-center gap-3">
              <AddToCartButton product={singleproduct} />
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { Productservice } from "@/app/Service/product-service";
// import AddToCartButton from "@/app/components/AddToCartButton";

// export default async function Detailpage({ params }: any) {

//   const { productid } = params;
//   const id = Number(productid);

//   const singleproduct = await Productservice.getproductbyid(id);

//   return (
//     <div className="container mt-3 d-flex flex-column min-vh-100">
//       <div className="card p-3 shadow" style={{ backgroundColor: "#f8e6f0" }}>
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

//             <h4 className="text-success mb-3">
//               ₹{singleproduct.price}
//             </h4>

//             <p className="mb-2">
//               <strong>Category:</strong> {singleproduct.category}
//             </p>

//             <p className="text-muted mb-4">
//               {singleproduct.description}
//             </p>

//             <div className="d-flex align-items-center gap-3">
//               <AddToCartButton product={singleproduct} />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

