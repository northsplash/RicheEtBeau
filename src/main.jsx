import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

function App() {
  return <HomePage />;
}

function HomePage() {
  return (
    <div className="page">

      <nav className="nav">
        <div>
          <h1 className="brand">RICHE ET BEAU</h1>
          <p className="tag">Luxury Athleisure</p>
        </div>

        <div className="navLinks">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="heroContent">

          <p className="eyebrow">
            Elevated Activewear
          </p>

          <h2 className="heroTitle">
            Designed For Women Who Move Beautifully.
          </h2>

          <p className="heroText">
            Sculpting silhouettes. Premium fabrics.
            Luxury comfort for every part of your day.
          </p>

          <div className="heroButtons">
            <a className="primaryBtn" href="#collection">
              Shop Collection
            </a>

            <a className="secondaryBtn" href="#about">
              Learn More
            </a>
          </div>

        </div>
      </motion.section>

      <section
        id="collection"
        className="collectionSection"
      >
        <p className="sectionLabel">
          Signature Collection
        </p>

        <h2 className="sectionTitle">
          The Essentials
        </h2>

        <div className="productGrid">

          <div className="productCard">
            <img
              src="/images/black-set.jpg"
              alt="Black Set"
            />

            <h3>Midnight Sculpt Set</h3>

            <p>
              Sports bra, leggings, and zip jacket.
            </p>

            <span>$129</span>
          </div>

          <div className="productCard">
            <img
              src="/images/cream-set.jpg"
              alt="Cream Set"
            />

            <h3>Ivory Luxe Set</h3>

            <p>
              Soft neutral luxury activewear.
            </p>

            <span>$129</span>
          </div>

          <div className="productCard">
            <img
              src="/images/espresso-set.jpg"
              alt="Espresso Set"
            />

            <h3>Espresso Elite Set</h3>

            <p>
              Rich sculpting performance fabric.
            </p>

            <span>$129</span>
          </div>

        </div>
      </section>

      <section
        id="about"
        className="aboutSection"
      >
        <p className="sectionLabel">
          About Riche Et Beau
        </p>

        <h2 className="sectionTitle">
          Luxury Without Compromise
        </h2>

        <p className="aboutText">
          Riche Et Beau combines elevated design,
          premium materials, and modern silhouettes
          to create activewear that feels just as
          luxurious as it looks.
        </p>
      </section>

      <section
        id="contact"
        className="contactSection"
      >
        <p className="sectionLabel">
          Stay Connected
        </p>

        <h2 className="sectionTitle">
          Join The Launch List
        </h2>

        <form className="emailForm">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit">
            Join Waitlist
          </button>
        </form>
      </section>

      <footer className="footer">
        <h3>RICHE ET BEAU</h3>

        <p>
          Luxury Athleisure For Modern Women
        </p>
      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);
