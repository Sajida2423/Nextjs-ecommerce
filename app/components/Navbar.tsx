"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '../../public/logo.png'
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#eaa0a2", fontFamily: "Arial, sans-serif" }}
    >
      <div className="container-fluid">
        <Link href="/" className="navbar-brand ">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={70}
            style={{ objectFit: "contain" }}
          />
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
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active text-primary fw-bold" : ""}`}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/Product"
                className={`nav-link ${pathname === "/Product" ? "active text-primary fw-bold" : ""}`}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/Cart"
                className={`nav-link ${pathname === "/Cart" ? "active text-primary fw-bold" : ""}`}
              >
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/About"
                className={`nav-link ${pathname === "/About" ? "active text-primary fw-bold" : ""}`}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/Contact"
                className={`nav-link ${pathname === "/Contact" ? "active text-primary fw-bold" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
