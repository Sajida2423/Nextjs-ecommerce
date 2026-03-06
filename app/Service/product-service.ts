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


import { Servicebase } from "./service-base";

export type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export class Productservice extends Servicebase {
  static async getallproducts(): Promise<product[]> {
    const response = await fetch(this.getUrl("/products"), { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  }

  static async getproductbyid(id: number): Promise<product> {
    const response = await fetch(this.getUrl(`/products/${id}`), { cache: "no-store" });
    if (!response.ok) throw new Error(`Product with id ${id} not found`);
    return response.json();
  }
}