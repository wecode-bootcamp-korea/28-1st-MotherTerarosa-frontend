import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard({ products }) {
  const { id, image_url, name, description, tasting_note, created_at, price } =
    products;
  return (
    <div className="productCard">
      <Link to={`/productdetail/:${id}`}>
        <img className="productImg" src={image_url} alt={name} />
      </Link>

      <div className="productName">{name}</div>
      <div className="productDescription">{description}</div>
      <div className="tasting_note">{tasting_note}</div>
      <div className="productDate">로스팅 : {created_at}</div>
      <div className="productPrice">{price}원</div>
    </div>
  );
}
