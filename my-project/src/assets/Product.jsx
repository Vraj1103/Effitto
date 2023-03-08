import React from "react";

export default function Product(props) {
  return (
    <div className="card mb-12 rounded-lg">
      <img className="product--image rounded-tl-lg rounded-tr-lg" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button className="rounded-bl-lg rounded-br-lg ">Add to Cart</button>
      </p>
    </div>
  );
}