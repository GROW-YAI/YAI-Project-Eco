"use client";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            My Website
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/about" className="navbar-item">
              About
            </a>
            <a href="/products" className="navbar-item">
              Products
            </a>
            <a href="/contact" className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}