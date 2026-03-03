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
//                 src={p.image}
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


import Link from "next/link";
import { Productservice, product } from "../Service/product-service";

export default async function Product({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const query = searchParams.search;

  const products: product[] = await Productservice.getallproducts();

  const searchTerm =
    typeof query === "string" ? query : Array.isArray(query) ? query[0] : "";

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
            <Link href={`/product/${p.id}`}>
              <img
                src={p.image}
                alt={p.title}
                style={{ height: "100px", objectFit: "contain" }}
                className="mx-auto d-block"
              />
            </Link>

            <div className="text-center mt-2">
              <h6>{p.title.substring(0, 40)}...</h6>
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