// export abstract class Servicebase{
// static API_URL="https://fakestoreapi.com"
// }


export abstract class Servicebase {
  static API_URL = "https://dummyjson.com";

  static getUrl(path: string) {
    return `${this.API_URL}${path}`;
  }
}