
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  // const [search, setSearch] = useState("");

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (search.trim() !== "") {
  //     // Navigate to /Product page with query param
  //     router.push(`/Product?search=${encodeURIComponent(search.trim())}`);
  //   }
  // };



  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#3c0023", fontFamily: "Arial, sans-serif"}}
    >
      <div className="container-fluid">
        
        <Link href="/" className="navbar-brand">
        <div style={{ height: "50px" }}>
          <Image
            src={logo}
            alt="Logo"
            style={{ height: "60px", width: "90px", objectFit: "contain" }}
          />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link  style={{ color: 'white', textDecoration: 'none' }}
                href="/"
                className={`nav-link ${pathname === "/" ? "active text-success fw-bold" : ""}`}
              >  
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link style={{ color: 'white', textDecoration: 'none' }}
                href="/product"
                className={`nav-link ${pathname === "/product" ? "active text-success fw-bold" : ""}`}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link style={{ color: 'white', textDecoration: 'none' }}
                href="/cart"
                className={`nav-link ${pathname === "/cart" ? "active text-success fw-bold" : ""}`}
              >
                Cart 
              </Link>
            </li>

            <li className="nav-item">
              <Link style={{ color: 'white', textDecoration: 'none' }}
                href="/about"
                className={`nav-link ${pathname === "/about" ? "active text-success fw-bold" : ""}`}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link style={{ color: 'white', textDecoration: 'none' }}
                href="/contact"
                className={`nav-link ${pathname === "/contact" ? "active text-success fw-bold" : ""}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>



<form
      className="d-flex mx-auto"
      role="search"
      style={{ maxWidth: "400px", width: "100%" }} 
        onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.search.value;
        router.push(`/product?search=${input}`);
      }}
    >
      <input
        name="search"
        className="form-control me-2"
        type="search"
        placeholder="Search....."
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>

          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
      </form> */}

        </div>
      </div>
    </nav>
  );
}