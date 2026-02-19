import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from "next/image";
import logo from '../../public/logo.png'

export default function Navbar() {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#eaa0a2', fontFamily: 'Arial, sans-serif' }}
    >
      <div className="container-fluid">

        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="Logo" width={100} height={70} style={{ objectFit: 'contain' }}/>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              {pathname === "/" ? (
                <span className="nav-link active fw-bold">Home</span>
              ) : (
                <Link href="/pages-home" className="nav-link">Home</Link>
              )}
            </li>

            <li className="nav-item">
              {pathname === "/product" ? (
                <span className="nav-link active fw-bold">Products</span>
              ) : (
                <Link href="/product" className="nav-link">Products</Link>
              )}
            </li>

            <li className="nav-item">
              {pathname === "/cart" ? (
                <span className="nav-link active fw-bold">Cart</span>
              ) : (
                <Link href="/cart" className="nav-link">Cart</Link>
              )}
            </li>

            <li className="nav-item">
              {pathname === "/about" ? (
                <span className="nav-link active fw-bold">About</span>
              ) : (
                <Link href="/about" className="nav-link">About</Link>
              )}
            </li>

            <li className="nav-item">
              {pathname === "/contact" ? (
                <span className="nav-link active fw-bold">Contact</span>
              ) : (
                <Link href="/contact" className="nav-link">Contact</Link>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
