import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

const phone = "330-990-3956";

const products = [
  {
    name: "Luxe Comfort Sports Set",
    color: "Cream",
    regularPrice: "$89.99",
    salePrice: "$64.99",
    images: [
      "/images/sports-cream-1.png",
      "/images/sports-cream-2.png",
      "/images/sports-cream-3.png",
    ],
  },
  {
    name: "Luxe Comfort Sports Set",
    color: "Black",
    regularPrice: "$89.99",
    salePrice: "$64.99",
    images: [
      "/images/sports-black-1.png",
      "/images/sports-black-2.png",
      "/images/sports-black-3.png",
    ],
  },
  {
    name: "Luxe Comfort Sports Set",
    color: "Chocolate",
    regularPrice: "$89.99",
    salePrice: "$64.99",
    images: [
      "/images/sports-chocolate-1.png",
      "/images/sports-chocolate-2.png",
      "/images/sports-chocolate-3.png",
    ],
  },
  {
    name: "Luxe Comfort Hoodie Set",
    color: "Cream",
    regularPrice: "$74.99",
    salePrice: "$54.99",
    images: [
      "/images/hoodie-cream-1.png",
      "/images/hoodie-cream-2.png",
      "/images/hoodie-cream-3.png",
    ],
  },
  {
    name: "Luxe Comfort Hoodie Set",
    color: "Black",
    regularPrice: "$74.99",
    salePrice: "$54.99",
    images: [
      "/images/hoodie-black-1.png",
      "/images/hoodie-black-2.png",
      "/images/hoodie-black-3.png",
    ],
  },
  {
    name: "Luxe Comfort Hoodie Set",
    color: "Chocolate",
    regularPrice: "$74.99",
    salePrice: "$54.99",
    images: [
      "/images/hoodie-chocolate-1.png",
      "/images/hoodie-chocolate-2.png",
      "/images/hoodie-chocolate-3.png",
    ],
  },
  {
    name: "Luxe Leather Set",
    color: "Black",
    regularPrice: "$119.99",
    salePrice: "$89.99",
    images: [
      "/images/leather-black-1.png",
      "/images/leather-black-2.png",
      "/images/leather-black-3.png",
    ],
  },
  {
    name: "Luxe Leather Set",
    color: "Chocolate",
    regularPrice: "$119.99",
    salePrice: "$89.99",
    images: [
      "/images/leather-chocolate-1.png",
      "/images/leather-chocolate-2.png",
      "/images/leather-chocolate-3.png",
    ],
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
          <p className="eyebrow">Launch Collection</p>

          <h2>Luxury Athleisure Made To Move.</h2>

          <p>
            Sculpting sports sets, elevated hoodie sets, and luxe leather looks
            designed for confidence, comfort, and everyday beauty.
          </p>

          <div className="heroButtons">
            <a href="#collection" className="primaryBtn">
              Shop The Collection
            </a>

            <a href="#waitlist" className="secondaryBtn">
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </section>

      <section id="collection" className="collectionSection">
        <p className="sectionLabel">Riche Et Beau Launch</p>

        <h2 className="sectionTitle">The Signature Collection</h2>

        <div className="productGrid">
          {products.map((item) => (
            <ProductCard key={`${item.name}-${item.color}`} item={item} />
          ))}
        </div>
      </section>

      <section id="details" className="detailsSection">
        <div>
          <p className="sectionLabel left">Designed For The Woman Who Moves</p>

          <h2>Soft power, sculpted comfort, and luxe everyday style.</h2>
        </div>

        <div className="detailsGrid">
          <div>
            <h3>Premium Feel</h3>
            <p>Soft-touch fabrics and flattering silhouettes designed to feel elevated.</p>
          </div>

          <div>
            <h3>Everyday Wear</h3>
            <p>From errands to travel to casual days out, each set is made to move with you.</p>
          </div>

          <div>
            <h3>Signature Colors</h3>
            <p>Cream, Black, and Chocolate create a timeless luxury color story.</p>
          </div>

          <div>
            <h3>Launch Pricing</h3>
            <p>Special introductory pricing while the first collection is available.</p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlistSection">
        <p className="sectionLabel">VIP Launch List</p>

        <h2>Be First To Shop Riche Et Beau.</h2>

        <p>
          Join the VIP list for early access, launch discounts, and first pick
          of Cream, Black, and Chocolate.
        </p>

        <form className="waitlistForm">
          <input type="email" placeholder="Enter your email" required />

          <button type="submit">Join Waitlist</button>
        </form>

        <p className="phoneText">Questions? Text or call {phone}</p>
      </section>

      <footer className="footer">
        <h3>RICHE ET BEAU</h3>
        <p>Luxury Athleisure For Modern Women</p>
        <p>{phone}</p>
      </footer>
    </div>
  );
}

function ProductCard({ item }) {
  const [activeImage, setActiveImage] = React.useState(item.images[0]);

  return (
    <motion.div
      className="productCard"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="imageWrap">
        <img src={activeImage} alt={`${item.name} ${item.color}`} />

        <span className="saleTag">Launch Sale</span>
      </div>

      <div className="thumbRow">
        {item.images.map((image) => (
          <button
            key={image}
            className={activeImage === image ? "activeThumb" : ""}
            onClick={() => setActiveImage(image)}
            type="button"
          >
            <img src={image} alt="Product thumbnail" />
          </button>
        ))}
      </div>

      <div className="productInfo">
        <p className="colorName">{item.color}</p>

        <h3>{item.name}</h3>

        <p>
          Luxe activewear set designed with elevated style, comfort, and a
          flattering fit.
        </p>

        <div className="priceRow">
          <span>{item.regularPrice}</span>
          <strong>{item.salePrice}</strong>
        </div>

        <div className="sizeRow">
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>

        <button className="cartBtn">
          Pay With Square
        </button>
      </div>
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
