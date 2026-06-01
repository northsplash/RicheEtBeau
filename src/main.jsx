import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

const phone = "330-990-3956";

const products = [
  {
    name: "Luxe Comfort Sports Set",
    regularPrice: "$89.99",
    salePrice: "$64.99",
    releaseDate: "Releases July 4",
    description:
      "Sports bra, high-waist leggings, and lightweight zip jacket.",
    colors: [
      {
        name: "Cream",
        images: [
          "/images/sports-cream-1.png",
          "/images/sports-cream-2.png",
          "/images/sports-cream-3.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/images/sports-black-1.png",
          "/images/sports-black-2.png",
          "/images/sports-black-3.png",
        ],
      },
      {
        name: "Chocolate",
        images: [
          "/images/sports-chocolate-1.png",
          "/images/sports-chocolate-2.png",
          "/images/sports-chocolate-3.png",
        ],
      },
    ],
  },
  {
    name: "Luxe Comfort Hoodie Set",
    regularPrice: "$74.99",
    salePrice: "$54.99",
    releaseDate: "Releases July 4",
    description:
      "Cropped hoodie and high-waist joggers made for elevated comfort.",
    colors: [
      {
        name: "Cream",
        images: [
          "/images/hoodie-cream-1.png",
          "/images/hoodie-cream-2.png",
          "/images/hoodie-cream-3.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/images/hoodie-black-1.png",
          "/images/hoodie-black-2.png",
          "/images/hoodie-black-3.png",
        ],
      },
      {
        name: "Chocolate",
        images: [
          "/images/hoodie-chocolate-1.png",
          "/images/hoodie-chocolate-2.png",
          "/images/hoodie-chocolate-3.png",
        ],
      },
    ],
  },
  {
    name: "Luxe Leather Set",
    regularPrice: "$119.99",
    salePrice: "$89.99",
    releaseDate: "Releases July 4",
    description:
      "Statement faux leather set with a sleek luxury finish.",
    colors: [
      {
        name: "Black",
        images: [
          "/images/leather-black-1.png",
          "/images/leather-black-2.png",
          "/images/leather-black-3.png",
        ],
      },
      {
        name: "Chocolate",
        images: [
          "/images/leather-chocolate-1.png",
          "/images/leather-chocolate-2.png",
          "/images/leather-chocolate-3.png",
        ],
      },
    ],
  },
];

function ProductCard({ item }) {
  const [selectedColor, setSelectedColor] = React.useState(item.colors[0]);
  const [activeImage, setActiveImage] = React.useState(item.colors[0].images[0]);
  const [selectedSize, setSelectedSize] = React.useState("");

  function chooseColor(color) {
    setSelectedColor(color);
    setActiveImage(color.images[0]);
  }

  return (
    <motion.div
      className="productCard"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="imageWrap">
        <img src={activeImage} alt={`${item.name} ${selectedColor.name}`} />

        <span className="saleTag">Preorder</span>
      </div>

      <div className="thumbRow">
        {selectedColor.images.map((image) => (
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
        <p className="colorName">{selectedColor.name}</p>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <p className="releaseDate">{item.releaseDate}</p>

        <div className="priceRow">
          <span>{item.regularPrice}</span>
          <strong>{item.salePrice}</strong>
        </div>

        <p className="optionLabel">Choose Color</p>

        <div className="colorChoiceRow">
          {item.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              className={
                selectedColor.name === color.name
                  ? "colorChoice activeColor"
                  : "colorChoice"
              }
              onClick={() => chooseColor(color)}
            >
              {color.name}
            </button>
          ))}
        </div>

        <p className="optionLabel">Choose Size</p>

        <div className="sizeRow">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              type="button"
              className={selectedSize === size ? "activeSize" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button className="cartBtn">
          Preorder With Square
        </button>

        <p className="preorderNote">
          Preorders are paid today. Orders begin releasing July 4.
        </p>
      </div>
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
