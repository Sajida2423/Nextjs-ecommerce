
// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";
// import { useRouter } from "next/navigation";

// type AuthContextType = {
//   token: string | null;
//   login: (username: string, password: string) => Promise<boolean>;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);
//   const router = useRouter();

//   const login = async (username: string, password: string) => {
//     try {

//       const res = await fetch("https://fakestoreapi.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();

//       if (data.token) {
//         setToken(data.token);
//         router.push("/cart"); 
//         return true;
//       }
//       return false;
//     } catch (err) {
//       console.error(err);
//       return false;
//     }
//   };

//   const logout = () => {
//     setToken(null);
//     router.push("/login"); 
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used inside AuthProvider");
//   return context;
// };




// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { useRouter } from "next/navigation";

// type AuthContextType = {
//   token: string | null;
//   login: (username: string, password: string) => Promise<boolean>;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const saved = localStorage.getItem("token");
//     if (saved) setToken(saved);
//   }, []);

//   const login = async (username: string, password: string) => {
//     try {
//       const res = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (data.token) {
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//         router.push("/cart");
//         return true;
//       }
//       return false;
//     } catch {
//       return false;
//     }
//   };

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//     router.push("/login");
//   };

//   return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used inside AuthProvider");
//   return context;
// };