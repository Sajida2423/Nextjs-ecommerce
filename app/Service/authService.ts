
// export async function login(username: string, password: string) {
//   try {
//     const response = await fetch("https://fakestoreapi.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) return null;

//     const result = await response.json();

//     localStorage.setItem("token", result.token);

//     return result;
//   } catch (error) {
//     console.error("Login error:", error);
//     return null;
//   }
// }

// export function logout() {
//   localStorage.removeItem("token");
// }

// export function getToken() {
//   return localStorage.getItem("token");
// }

// export function isAuthenticated() {
//   return getToken() !== null;
// }


// /utils/auth.ts

export async function login(username: string, password: string) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) return null;

    const result = await response.json();

    if (result.token) {
      localStorage.setItem("token", result.token);
      return result;
    }

    return null;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}

export function getToken() {
  if (typeof window === "undefined") return null; // ensure safe SSR
  return localStorage.getItem("token");
}

export function isAuthenticated() {
  return getToken() !== null;
}