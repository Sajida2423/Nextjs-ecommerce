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
  images: string[];
};

export class Productservice extends Servicebase {
  static async getallproducts(): Promise<product[]> {
    const response = await fetch(`${this.API_URL}/products`, { cache: "force-cache" });
    const data = await response.json();
    return data.products;
  }

  static async getproductbyid(id: number): Promise<product | null> {
    const response = await fetch(`${this.API_URL}/products/${id}`, { cache: "force-cache" });
    if (!response.ok) return null;
    const data: product = await response.json();
    return data;
  }
}