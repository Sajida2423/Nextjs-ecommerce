// export abstract class Servicebase{
// static API_URL="https://fakestoreapi.com"
// }


export abstract class Servicebase {
  static Url= "https://fakestoreapi.com";

  static getUrl(path: string) {
    return `${this.Url}${path}`;
  }
}