// import Link from "next/link";
// import { Productservice, product } from "../Service/product-service";

// export default async function Product({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   const params = await searchParams;

//   const products: product[] = await Productservice.getallproducts();

//   const query = params?.search;

//   const searchTerm =
//     typeof query === "string"
//       ? query
//       : Array.isArray(query)
//       ? query[0]
//       : "";

//   const filteredProducts = searchTerm.trim()
//     ? products.filter((p) => {
//         const title = p.title.toLowerCase();
//         const search = searchTerm.toLowerCase();
//         const words = title.split(/\s+/);
//         return words.some((word) => word.startsWith(search));
//       })
//     : products;

//   return (
//     <div className="container mt-4 d-flex flex-column min-vh-100">
//       {searchTerm && (
//         <h5 className="mb-3">
//           Search Results for: <strong>{searchTerm}</strong>
//         </h5>
//       )}

//       <div className="d-flex flex-wrap justify-content-center">
//         {filteredProducts.map((p) => (
//           <div
//             key={p.id}
//             className="card m-3 p-3 shadow-sm"
//             style={{ width: "220px", backgroundColor: "#f8e6f0" }}
//           >
//             <Link href={`/product/${p.id}`}>
//               <img
//                 src={p.images[0]}
//                 alt={p.title}
//                 style={{
//                   height: "100px",
//                   objectFit: "contain",
//                 }}
//                 className="mx-auto d-block"
//               />
//             </Link>

//             <div className="text-center mt-2">
//               <h6>{p.title.substring(0, 40)}...</h6>
//               <p className="fw-bold">₹{p.price}</p>

//             </div>
//           </div>
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


// // import Link from "next/link";
// // import { Productservice, product } from "../Service/product-service";

// // export default async function Product({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
// //   const query = searchParams.search;

// //   const products: product[] = await Productservice.getallproducts();

// //   const searchTerm =
// //     typeof query === "string" ? query : Array.isArray(query) ? query[0] : "";

// //   const filteredProducts = searchTerm.trim()
// //     ? products.filter((p) => {
// //         const title = p.title.toLowerCase();
// //         const search = searchTerm.toLowerCase();
// //         const words = title.split(/\s+/);
// //         return words.some((word) => word.startsWith(search));
// //       })
// //     : products;

// //   return (
// //     <div className="container mt-4 d-flex flex-column min-vh-100">
// //       {searchTerm && (
// //         <h5 className="mb-3">
// //           Search Results for: <strong>{searchTerm}</strong>
// //         </h5>
// //       )}

// //       <div className="d-flex flex-wrap justify-content-center">
// //         {filteredProducts.map((p) => (
// //           <div
// //             key={p.id}
// //             className="card m-3 p-3 shadow-sm"
// //             style={{ width: "220px", backgroundColor: "#f8e6f0" }}
// //           >
// //             <Link href={`/product/${p.id}`}>
// //               <img
// //                 src={p.image}
// //                 alt={p.title}
// //                 style={{ height: "100px", objectFit: "contain" }}
// //                 className="mx-auto d-block"
// //               />
// //             </Link>

// //             <div className="text-center mt-2">
// //               <h6>{p.title.substring(0, 40)}...</h6>
// //               <p className="fw-bold">₹{p.price}</p>
// //             </div>
// //           </div>
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


// import Link from "next/link";
// import Image from "next/image";
// import { Productservice, product } from "@/app/Service/product-service";

// export default async function ProductPage({
//   searchParams,
// }: {
//   searchParams: { search?: string | string[] };
// }) {
//   // Get search term
//   const query = searchParams?.search;
//   const searchTerm =
//     typeof query === "string"
//       ? query.trim().toLowerCase()
//       : Array.isArray(query)
//       ? query[0].trim().toLowerCase()
//       : "";

//   // Fetch all products
//   const products: product[] = await Productservice.getallproducts();

//   // Filter products using word-start search
//   const filteredProducts = searchTerm
//     ? products.filter((p) => {
//         const words = p.title.toLowerCase().split(/\s+/);
//         return words.some((word) => word.startsWith(searchTerm));
//       })
//     : products;

//   return (
//     <div className="container mt-3">
//       {searchTerm && (
//         <h5 className="mb-3">
//           Search Results for: <strong>{searchTerm}</strong>
//         </h5>
//       )}

//       <div className="row">
//         {filteredProducts.map((p) => (
//           <div className="col-md-3 mb-4" key={p.id}>
//             <div className="card p-2 shadow">
//               <Link href={`/product/${p.id}`}>
//                 <Image
//                   src={p.images[0]}
//                   alt={p.title}
//                   width={180}
//                   height={180}
//                   style={{ objectFit: "contain" }}
//                 />
//                 <h5 className="mt-2">{p.title.length > 40 ? p.title.substring(0, 40) + "..." : p.title}</h5>
//                 <p className="text-success">₹{p.price}</p>
//               </Link>
//             </div>
//           </div>
//         ))}

//         {filteredProducts.length === 0 && (
//           <div className="text-center mt-5">
//             <h5>No products found</h5>
//             <p>Try searching with a different keyword.</p>
//           </div>
//         )}
//       </div>
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
  const products: product[] = await Productservice.getallproducts();

  const query = params?.search;
  const searchTerm =
    typeof query === "string"
      ? query.trim()
      : Array.isArray(query)
      ? query[0].trim()
      : "";

  const filteredProducts = searchTerm
    ? products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
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
            <Link href={`/product/${p.id}`}>
              <img
                src={p.images[0]}
                alt={p.title}
                style={{
                  height: "100px",
                  objectFit: "contain",
                }}
                className="mx-auto d-block"
              />
            </Link>

            <div className="text-center mt-2">
              <h6>{p.title.length > 40 ? p.title.substring(0, 40) + "..." : p.title}</h6>
              <p className="fw-bold">₹{p.price}</p>
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