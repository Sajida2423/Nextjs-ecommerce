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
// // const response=await fetch(`${this.API_URL}/products`)
// const response=await fetch(this.getUrl(`/products`),{
//   cache:"no-store"
// })
// // const data=await response.json()
// // return data
// if(!response.ok){
//   console.error("API Error:",response.status)
//   return []
// }
// return await response.json()
// }


// static async getproductbyid (id:any) {
// const response=await fetch(this.getUrl(`/product/${id}`),{
//   cache:"no-store"
// })
// // const data=await response.json()
// // return data

// if(!response.ok){
//   console.error("API Error:",response.status)
//   return null
// }
// return await response.json()
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

  static async getallproducts() {
    const response = await fetch(this.getUrl(`/products`), {
      cache: "no-store"
    });

    if (!response.ok) {
      console.error("API Error:", response.status);
      return [];
    }

    return await response.json();
  }

  static async getproductbyid(id: number) {
    const response = await fetch(this.getUrl(`/products/${id}`), { // ✅ fixed URL
      cache: "no-store"
    });

    if (!response.ok) {
      console.error("API Error:", response.status);
      return null;
    }

    return await response.json();
  }
}