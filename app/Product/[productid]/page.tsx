// import { Productservice,product } from "@/app/Service/product-service"
// import AddToCartButton from "@/app/components/AddToCartButton";


// export default async function Detailpage(props:any) {
//     // console.log(props)
//     const param=await props.params
//     const prodid=param.productid

//     const singleproduct=await Productservice.getproductbyid(prodid)

//   return (
//        <div>
   
//       <div className="container mt-4">
//       <div className="card p-3 text-center">
//        <img
//           src={singleproduct.image}
//           alt={singleproduct.title}
//           style={{ width: '200px', height: '200px', objectFit: 'contain' }}
//           className="mx-auto"
//         />

//           <div className="card-body">
//           <h4>{singleproduct.title}</h4>
//           <h5 className="text-success">₹{singleproduct.price}</h5>
//           <p className="text-muted">{singleproduct.description}</p>
//            <p className="text-muted">{singleproduct.category}</p>

//           <AddToCartButton product={Product} />
//         </div>
// </div>
//     </div>
// </div>
//   )
// }


import { Productservice } from "@/app/Service/product-service";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function Detailpage(props: any) {
  const param = await props.params;
  const prodid = param.productid;

  const singleproduct = await Productservice.getproductbyid(prodid);

  return (
    <div className="container mt-3 d-flex flex-column min-vh-100">
      <div className="card p-3 shadow " style={{backgroundColor:"#f8e6f0"}}>
        <div className="row">
          {/* 🔹 Image Left */}
          <div className="col-md-5 text-center">
            <img
              src={singleproduct.image}
              alt={singleproduct.title}
              className="img-fluid"
              style={{ height: "180px", objectFit: "contain" }}
            />
          </div>

          {/* 🔹 Details Right */}
          <div className="col-md-7">
            <h3 className="mb-3">{singleproduct.title}</h3>
            <h4 className="text-success mb-3">₹{singleproduct.price}</h4>

            <p className="mb-2">
              <strong>Category:</strong> {singleproduct.category}
            </p>

            <p className="text-muted mb-4">{singleproduct.description}</p>

            {/* ✅ Add to Cart */}
            <div className="d-flex align-items-center gap-3">
              <AddToCartButton product={singleproduct} />
              {/* <button className="btn btn-warning">Buy Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { Productservice } from "@/app/Service/product-service";
// import AddToCartButton from "@/app/components/AddToCartButton";
// import { notFound } from "next/navigation";

// export default async function DetailPage({
//   params,
// }: {
//   params: { productid: string };
// }) {
//   const singleproduct = await Productservice.getproductbyid(params.productid);

//   if (!singleproduct) {
//     notFound();
//   }

//   return (
//     <div className="container mt-5">
//       <div className="card p-4 shadow">
//         <div className="row">
//           {/* 🔹 Image Left */}
//           <div className="col-md-5 text-center">
//             <img
//               src={singleproduct.image}
//               alt={singleproduct.title}
//               className="img-fluid"
//               style={{ maxHeight: "350px", objectFit: "contain" }}
//             />
//           </div>

//           {/* 🔹 Details Right */}
//           <div className="col-md-7">
//             <h3 className="mb-3">{singleproduct.title}</h3>
//             <h4 className="text-success mb-3">₹{singleproduct.price}</h4>

//             <p className="mb-2">
//               <strong>Category:</strong> {singleproduct.category}
//             </p>

//             <p className="text-muted mb-4">{singleproduct.description}</p>

//             {/* ✅ Add to Cart */}
//             <div className="d-flex align-items-center gap-3">
//               <AddToCartButton product={singleproduct} />
//               <button className="btn btn-warning">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }