import React from 'react';
import './ProductCard.scss';

export default function ProductCard({ products }) {
  return (
    <section className="productCard">
      <img
        className="productImg"
        src={products.image_url}
        alt={products.product_name}
      />
      <div className="productName">{products.product_name}</div>
      <div className="productNameEn">{products.product_name_en}</div>
      <div className="productDescription">{products.description}</div>
      <div className="productDate">로스팅 : {products.date}</div>
      <div className="productPrice">{products.price}원</div>
    </section>
  );
}
