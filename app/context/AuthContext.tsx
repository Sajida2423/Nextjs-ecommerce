// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { AuthService } from "../Service/authService";

// type AuthContextType = {
//   token: string | null;
//   login: (username: string, password: string) => Promise<boolean>;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     const savedToken = AuthService.getToken();
//     setToken(savedToken);
//   }, []);

//   const login = async (username: string, password: string) => {
//     const result = await AuthService.login({ username, password });

//     if (result?.token) {
//       setToken(result.token);
//       return true;
//     }

//     return false;
//   };

//   const logout = () => {
//     AuthService.logout();
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };


// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { login as loginService, logout as logoutService, getToken } from "../Service/authService";

// interface AuthContextType {
//   token: string | null;
//   login: (username: string, password: string) => Promise<boolean>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);

//   // Load token from localStorage on app start
//   useEffect(() => {
//     const savedToken = getToken();
//     if (savedToken) setToken(savedToken);
//   }, []);

//   const login = async (username: string, password: string) => {
//     const result = await loginService(username, password);
//     if (result && result.token) {
//       setToken(result.token);
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     logoutService();
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };

"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      // Replace this with your API endpoint
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.token) {
        setToken(data.token);
        router.push("/cart"); // redirect to home after login
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    router.push("/login"); // go to login page
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier use
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};