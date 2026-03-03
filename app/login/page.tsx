
// "use client";
// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useRouter } from "next/navigation";
// import { FormEvent } from "react";

// export default function LoginPage() {
//   const { login } = useAuth();
//   const router = useRouter();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const success = await login(username, password);
//     if (success) {
//       router.push("/"); // redirect to home after login
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "50px auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{ width: "100%", padding: 5, marginBottom: 10 }}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: 5, marginBottom: 10 }}
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit" style={{ padding: 10, width: "100%" }}>Login</button>
//       </form>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const { login, logout, token } = useAuth();
//   const router = useRouter();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Redirect if already logged in
//   useEffect(() => {
//     // if (token) router.push("/");
//   }, [token, router]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const success = await login(username, password);
//     setLoading(false);

//     if (!success) setError("Invalid username or password");
//   };

//   const handleFastLogin = async () => {
//     setLoading(true);
//     await login("mor_2314", "83r5^_"); // FakeStoreAPI test user
//     setLoading(false);
//     router.push("/"); // go home immediately
//   };

//   const handleRemoveToken = () => {
//     logout();
//     setUsername("");
//     setPassword("");
//     setError("");
//     alert("Token removed! You can login again.");
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
//           />
//         </div>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submit" style={{ width: "100%", padding: "10px" }} disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       {/* Fast login button for dev */}
//       <button
//         type="button"
//         onClick={handleFastLogin}
//         style={{ width: "100%", padding: "10px", marginTop: "10px" }}
//         disabled={loading}
//       >
//         {loading ? "Logging in..." : "Fast Login (Dev)"}
//       </button>

//       {/* Remove token / logout button */}
//       {token && (
//         <button
//           type="button"
//           onClick={handleRemoveToken}
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginTop: "10px",
//             backgroundColor: "#f44336",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Remove Token / Logout
//         </button>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username, password);
    if (!success) setError("Invalid username or password");
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}