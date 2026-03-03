// // import React from 'react'
// // import ProductCard from './Productcard/page';
// // import { Productservice } from '../Service/product-service';
// // export default async function Product() {

// // const products= await Productservice.getallproducts()

// // return (

// // <div className="container mt-4">
      
// //       {/* <h4 className="text-center mb-4">Products</h4> */}

// //       <div className="d-flex flex-wrap justify-content-center">
// //         {products.map((p: any) => (
// //           <ProductCard key={p.id} product={p} />
// //         ))}
// //       </div>

// //     </div>
// //   )
// // }
// // import React from "react";
// // import ProductCard from "./Productcard/page";
// // import { Productservice } from "../Service/product-service";

// // // Props type for searchParams
// // interface Props {
// //   searchParams?: { [key: string]: string | string[] | undefined };
// // }

// // export default async function Product({ searchParams }: Props) {
// //   const products = await Productservice.getallproducts();

// //   // Get the search query safely
// //   const query = searchParams?.search;
// //   const searchTerm = Array.isArray(query) ? query[0] : query || "";

// //   // Filter products by title if searchTerm exists
// //   const filteredProducts = searchTerm
// //     ? products.filter((p: any) =>
// //         p.title.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : products;

// //   return (
// //     <div className="container mt-4">
// //       <div className="d-flex flex-wrap justify-content-center">
// //         {filteredProducts.map((p: any) => (
// //           <ProductCard key={p.id} product={p} />
// //         ))}
// //       </div>

// //       {filteredProducts.length === 0 && (
// //         <p className="text-center mt-4">No products found!</p>
// //       )}
// //     </div>
// //   );
// // }








// {/* <div>
//     <h1>
//         <div>
//         {
            
//         products.map((p:any)=>{
//        return(
//         <div className='container'>
       
//        <ProductCard key={p.id} product={p}></ProductCard>
       
//     //    <div><h3>{p.title}</h3>
//     //    <img src={p.image} alt="" width={100}/></div>
//         })
        
//        }
//        </div>
//         </div>
//     </h1>
//  </div>       
// );
// }
//  */}



// // import React from "react";
// // import ProductCard from "../components/ProductCard";
// // import { Productservice} from "../Service/product-service";
// // import { Product } from "../Service/product-service";

// // interface Props {
// //   searchParams?: { [key: string]: string | string[] | undefined };
// // }

// // export default async function Product({ searchParams }: Props) {
// //   const products: Product[] = await Productservice.getallproducts();

// //   const query = searchParams?.search;
// //   const searchTerm =
// //     typeof query === "string"
// //       ? query
// //       : Array.isArray(query)
// //       ? query[0]
// //       : "";

// //   const filteredProducts = searchTerm.trim()
// //     ? products.filter((p) =>
// //         p.title.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : products;

// //   return (
// //     <div className="container mt-4">
// //       {searchTerm && (
// //         <h5 className="mb-3">
// //           Search Results for: <strong>{searchTerm}</strong>
// //         </h5>
// //       )}

// //       <div className="d-flex flex-wrap justify-content-center">
// //         {filteredProducts.map((p) => (
// //           <ProductCard key={p.id} product={p} />
// //         ))}
// //       </div>

// //       {filteredProducts.length === 0 && (
// //         <div className="text-center mt-5">
// //           <h5>No products found</h5>
// //           <p>Try searching with a different keyword.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // import React from "react";
// // import ProductCard from "../components/ProductCard";
// // import { Productservice, product } from "../Service/product-service";

// // export default async function Product({
// //   searchParams,
// // }: {
// //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// // }) {
// //   const params = await searchParams; // ✅ unwrap promise

// //   const products: product[] = await Productservice.getallproducts();

// //   const query = params?.search;

// //   const searchTerm =
// //     typeof query === "string"
// //       ? query
// //       : Array.isArray(query)
// //       ? query[0]
// //       : "";

// //   const filteredProducts = searchTerm.trim()
// //     ? products.filter((p) =>
// //         p.title.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : products;

// //   return (
// //     <div className="container mt-4">
// //       {searchTerm && (
// //         <h5 className="mb-3">
// //           Search Results for: <strong>{searchTerm}</strong>
// //         </h5>
// //       )}

// //       <div className="d-flex flex-wrap justify-content-center">
// //         {filteredProducts.map((p) => (
// //           <ProductCard key={p.id} product={p} />
// //         ))}
// //       </div>

// //       {filteredProducts.length === 0 && (
// //         <div className="text-center mt-5">
// //           <h5>No products found</h5>
// //           <p>Try searching with a different keyword.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import ProductCard from "../components/ProductCard";
// import { Productservice, product } from "../Service/product-service";

// export default async function Product({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   // ✅ Next.js 15: unwrap searchParams
//   const params = await searchParams;

//   // Fetch all products
//   const products: product[] = await Productservice.getallproducts();

//   // Get search query
//   const query = params?.search;

//   const searchTerm =
//     typeof query === "string"
//       ? query
//       : Array.isArray(query)
//       ? query[0]
//       : "";

//   // ✅ Smart search logic (no "women" when searching "men")
//   const filteredProducts = searchTerm.trim()
//     ? products.filter((p) => {
//         const title = p.title.toLowerCase();
//         const search = searchTerm.toLowerCase();

//         // Split title into individual words
//         const words = title.split(/\s+/);

//         // Match if any word starts with search term
//         return words.some((word:any) => word.startsWith(search));
//       })
//     : products;

//   return (
//     <div className="container mt-4">
    
//       {searchTerm && (
//         <h5 className="mb-3">
//           Search Results for: <strong>{searchTerm}</strong>
//         </h5>
//       )}

//       <div className="d-flex flex-wrap justify-content-center">
//         {filteredProducts.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>

//       {filteredProducts.length === 0 && (
//         <div className="text-center mt-5">
//           <h5>No products found</h5>
//           <p>Try searching with a different keyword.</p>
//         </div>
//       )}
//     </div>
//   );
// }

import Link from "next/link";
import { Productservice, product } from "../Service/product-service";

export default async function Product({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  // Fetch products
  const products: product[] = await Productservice.getallproducts();

  const query = params?.search;

  const searchTerm =
    typeof query === "string"
      ? query
      : Array.isArray(query)
      ? query[0]
      : "";

  // Smart search logic
  const filteredProducts = searchTerm.trim()
    ? products.filter((p) => {
        const title = p.title.toLowerCase();
        const search = searchTerm.toLowerCase();
        const words = title.split(/\s+/);
        return words.some((word) => word.startsWith(search));
      })
    : products;

  return (
    <div className="container mt-4 d-flex flex-column min-vh-100">
      {searchTerm && (
        <h5 className="mb-3">
          Search Results for: <strong>{searchTerm}</strong>
        </h5>
      )}

      <div className="d-flex flex-wrap justify-content-center">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="card m-3 p-3 shadow-sm"
            style={{ width: "220px", backgroundColor: "#f8e6f0" }}
          >
            <Link href={`/Product/${p.id}`}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  height: "100px",
                  objectFit: "contain",
                }}
                className="mx-auto d-block"
              />
            </Link>

            <div className="text-center mt-2">
              <h6>{p.title.substring(0, 40)}...</h6>
              <p className="fw-bold">₹{p.price}</p>

              {/* <Link
                href={`/products/${p.id}`}
                className="btn btn-primary btn-sm"
              >
                View Details
              </Link> */}
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center mt-5">
          <h5>No products found</h5>
          <p>Try searching with a different keyword.</p>
        </div>
      )}
    </div>
  );
}