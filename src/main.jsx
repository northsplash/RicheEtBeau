import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

const products = [
  {
    name: "Ivory Luxe Set",
    color: "Cream",
    price: "$129",
    image: "/images/cream-set.png",
  },
  {
    name: "Midnight Sculpt Set",
    color: "Black",
    price: "$129",
    image: "/images/black-set.png",
  },
  {
    name: "Espresso Elite Set",
    color: "Chocolate",
    price: "$129",
    image: "/images/chocolate-set.png",
  },
];

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div>
          <h1 className="brand">RICHE ET BEAU</h1>
          <p className="tag">Luxe Confidence Beauty</p>
        </div>

        <div className="navLinks">
          <a href="#collection">Collection</a>
          <a href="#details">Details</a>
          <a href="#waitlist">Waitlist</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">New Arrival</p>
          <h2>Luxury Athleisure Made To Move.</h2>
          <p>
            Sculpting sports sets designed with premium comfort, elevated detail,
            and a confident fit for everyday power.
          </p>

          <div className="heroButtons">
            <a href="#collection" className="primaryBtn">Shop The Set</a>
            <a href="#waitlist" className="secondaryBtn">Join Waitlist</a>
          </div>
        </motion.div>
      </section>

      <section id="collection" className="collectionSection">
        <p className="sectionLabel">Signature Collection</p>
        <h2 className="sectionTitle">The Luxe Comfort Sports Set</h2>

        <div className="productGrid">
          {products.map((item) => (
            <motion.div
              className="productCard"
              key={item.name}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="imageWrap">
                <img src={item.image} alt={item.name} />
                <span className="saleTag">New Arrival</span>
              </div>

              <div className="productInfo">
                <p className="colorName">{item.color}</p>
                <h3>{item.name}</h3>
                <p>Sports bra, high-waist leggings, and lightweight zip jacket.</p>
                <strong>{item.price}</strong>

                <div className="swatches">
                  <span className="swatch cream"></span>
                  <span className="swatch black"></span>
                  <span className="swatch chocolate"></span>
                </div>

                <button>Add To Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="details" className="detailsSection">
        <div>
          <p className="sectionLabel left">Designed For Movement</p>
          <h2>Premium Details. Sculpting Fit. Everyday Luxury.</h2>
        </div>

        <div className="detailsGrid">
          <div>
            <h3>Four-Way Stretch</h3>
            <p>Moves with your body without losing shape.</p>
          </div>

          <div>
            <h3>Moisture Wicking</h3>
            <p>Designed to stay cool, dry, and comfortable.</p>
          </div>

          <div>
            <h3>Sculpting Support</h3>
            <p>High-waist shaping with a smooth, flattering fit.</p>
          </div>

          <div>
            <h3>Luxury Branding</h3>
            <p>Subtle RB details with a premium finish.</p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlistSection">
        <p className="sectionLabel">Launch List</p>
        <h2>Be First To Shop Riche Et Beau.</h2>
        <p>
          Join the VIP list for early access, launch discounts, and first pick
          of Cream, Black, and Chocolate.
        </p>

        <form className="waitlistForm">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Join Waitlist</button>
        </form>
      </section>

      <footer className="footer">
        <h3>RICHE ET BEAU</h3>
        <p>Luxury Athleisure For Modern Women</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
