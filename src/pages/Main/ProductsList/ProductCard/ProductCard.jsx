import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard({ products }) {
  const { id, image_url, name, description, tasting_note, created_at, price } =
    products;

  const editTastingNote = () => {
    // console.log(tasting_note);
    const stringNote = tasting_note.join(', ');
    // console.log(stringNote);
    if (tasting_note.length === 0) return `ㅤ`;
    else return stringNote;
  };
  return (
    <div className="productCard">
      <Link to={`/productdetail/${id}`}>
        <img className="productImg" src={image_url} alt={name} />
      </Link>
      <Link to={`/productdetail/${id}`}>
        <div className="productName">{name}</div>
      </Link>
      <div className="productDescription">{description}</div>
      <div className="tasting_note">{editTastingNote()}</div>
      <div className="productDate">제조일 : {created_at}</div>
      <div className="productPrice">{price}원</div>
    </div>
  );
}
