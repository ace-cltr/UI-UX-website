import React from "react";

const dummyDataRelate = [
  {
    img: "./gallery.png",
    heading: "Heading",
    price: 42,
    text: "Lorem ipsum dolor",
  },
  {
    img: "./gallery.png",
    heading: "Heading",
    price: 62,
    text: "Lorem ipsum dolor",
  },
  {
    img: "./gallery.png",
    heading: "Heading",
    price: 32,
    text: "Lorem ipsum dolor",
  },
];

export default function RelatedProductCard() {
  return (
    <div className="related-cards-div">
      {dummyDataRelate.map((el, i) => (
        <RelatedProDetails el={el} key={i} />
      ))}
    </div>
  );
}

function RelatedProDetails({ el }) {
  return (
    <div className="product-card-related">
      <div className="product-image">
        <img src={el.img} alt={el.heading} />
      </div>
      <div className="product-info">
        <div className="product-tags">
          <span lassName="tag">20% off</span>
        </div>
        <h2 className="product-name">{el.heading}</h2>
        <p className="product-detail">{el.text}</p>
        <div className="product-price">
          <span className="main-price">₹{el.price}</span>
          <span className="old-price">₹70</span>
          <span className="discount">(55% off)</span>
        </div>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
}
