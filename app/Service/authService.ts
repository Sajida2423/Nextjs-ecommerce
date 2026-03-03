// export type LoginData = {
//   username: string;
//   password: string;
// };

// export class AuthService {
//   static async login(data: LoginData) {
//     try {
//       const response = await fetch("https://fakestoreapi.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         return null;
//       }

//       const result = await response.json();

//       // Save token
//       localStorage.setItem("token", result.token);

//       return result;
//     } catch (error) {
//       console.error("Login error:", error);
//       return null;
//     }
//   }

//   static logout() {
//     localStorage.removeItem("token");
//   }

//   static getToken() {
//     if (typeof window === "undefined") return null;
//     return localStorage.getItem("token");
//   }

//   static isAuthenticated() {
//     return !!this.getToken();
//   }
// }


// authService.ts

// authService.ts
// Service/authService.ts
export async function login(username: string, password: string) {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) return null;

    const result = await response.json();

    // Save token in localStorage
    localStorage.setItem("token", result.token);

    return result;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function isAuthenticated() {
  return getToken() !== null;
}