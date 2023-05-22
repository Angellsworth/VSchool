import React from "react";
import { useNavigate } from "react-router-dom";
import productData from "./productData";

export default function Services() {
  const navigate = useNavigate();

  const products = productData.map((product) => (
    <h3 key={`product_id}`}>
      <Link to={`/products/${product._id}`}>{product.name}</Link> - $
      {product.price}
    </h3>
  ));

  return (
    <main className="mainSection">
      <h1>Services Page</h1>
      <p>Here is where I list our services</p>
      <p>
        <em>(every single one of them)</em>
      </p>
      <button onClick={() => navigate("/")}> Return Home</button>
      <button onClick={() => navigate(-1)}> Go Back 1</button>
    </main>
  );
}
