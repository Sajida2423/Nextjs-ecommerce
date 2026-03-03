
export default function About() {
  return (
    <div className="aboutus d-flex flex-column min-vh-100 container-fluid  justify-content-center" style={{backgroundColor:"#f0c9e0"}}>

      {/* <div className="container-fluid d-flex vh-100 align-items-center justify-content-center" style={{backgroundColor:"#f0c9e0"}}> */}
      <h2 style={{ color: "blue" }}>About Us</h2>
      <hr />

      <h3 style={{ color: "red" }}>Welcome to SmartCart</h3>

      <p>
        We believe shopping should be easy, secure, and enjoyable. That's why
        we built SmartCart to help customers find quality products at great
        prices, all in one place.
      </p>

      <hr />

      <h4>Our Mission</h4>
      <p>Our mission is to make online shopping hassle-free by offering:</p>

      <ul>
        <li>✔ High-quality products</li>
        <li>✔ Affordable pricing</li>
        <li>✔ Fast and secure checkout</li>
        <li>✔ Excellent customer support</li>
      </ul>

      <p>We're committed to improving your experience every day.</p>

      <hr />

      <h4>Why Choose Us?</h4>
      <ul>
        <li>🛒 Easy-to-use platform</li>
        <li>🔒 Safe & secure payments</li>
        <li>🚚 Reliable delivery</li>
        <li>💬 Friendly customer support</li>
      </ul>

      <p>Customer satisfaction is at the heart of everything we do.</p>

      <hr />

      <h4>Our Vision</h4>
      <p>
        To become a trusted and loved shopping platform by continuously
        innovating and putting our customers first.
      </p>
    </div>
  );
}