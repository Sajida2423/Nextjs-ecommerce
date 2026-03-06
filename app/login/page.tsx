// "use client";

// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function LoginPage() {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const success = await login(username, password);
//     if (!success) setError("Invalid username or password");
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "50px auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           style={{ width: "100%", padding: 8, marginBottom: 10 }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ width: "100%", padding: 8, marginBottom: 10 }}
//         />
//         <button type="submit" style={{ width: "100%", padding: 8 }}>
//           Login
//         </button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useAuth } from "@/app/context/AuthContext";

// export default function LoginPage() {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const success = await login(username, password);
//     if (!success) setError("Invalid username or password");
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: 400 }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="form-control mb-2" />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control mb-2" />
//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//       {error && <p className="text-danger mt-2">{error}</p>}
//     </div>
//   );
// }




"use client";

import { useState } from "react";

export default function LoginPage() {
  // Hardcoded DummyJSON credentials
  const DUMMY_USER = {
    username: "kminchelle",
    password: "0lelplR",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple hardcoded login check
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      setSuccess(true);
      setError("");
    } else {
      setError("Invalid username or password");
      setSuccess(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Login</h2>

      {success ? (
        <p className="text-success">Login successful! Welcome, {username}.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      )}

      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}