// import { Servicebase } from "./service-base"

// export type product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// };

// export class Productservice extends Servicebase{
// static async getallproducts () {
// const response=await fetch(`${this.API_URL}/products`)
// const data=await response.json()
// return data
// }


// static async getproductbyid (id:any) {
// const response=await fetch(`${this.API_URL}/products/${id}`)
// const data=await response.json()
// return data
// }

// }

// import { Servicebase } from "./service-base";

// export type product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   images: string[];
// };

// export class Productservice extends Servicebase {
//   // Fetch all products
//   static async getallproducts(): Promise<product[]> {
//     const response = await fetch(this.getUrl("/products"), { cache: "no-store" });
//     if (!response.ok) throw new Error("Failed to fetch products");
//     const data = await response.json();
//     return data.products; // DummyJSON wraps products in { products: [...] }
//   }

//   // Fetch product by ID
//   static async getproductbyid(id: number): Promise<product> {
//     const response = await fetch(this.getUrl(`/products/${id}`), { cache: "no-store" });
//     if (!response.ok) throw new Error(`Product with id ${id} not found`);
//     return response.json();
//   }
// }



import { Servicebase } from "./service-base";

export type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
};

export class Productservice extends Servicebase {
  static async getallproducts(): Promise<product[]> {
    const response = await fetch(this.getUrl("/products"), { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data.products;
  }

  static async getproductbyid(id: number): Promise<product> {
    const response = await fetch(this.getUrl(`/products/${id}`), { cache: "no-store" });
    if (!response.ok) throw new Error(`Product with id ${id} not found`);
    return response.json();
  }
}