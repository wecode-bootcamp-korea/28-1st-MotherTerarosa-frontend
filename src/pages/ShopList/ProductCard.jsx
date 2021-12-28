import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  // eslint-disable-next-line prettier/prettier
  const {
    image_url: imageUrl,
    product_name: name,
    product_name_en: enName,
    description,
    price,
  } = props;

  const priceWithComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="card">
      <div className="imageWrapper">
        <Link to="#">
          <img src={imageUrl} alt={name} />
        </Link>
      </div>
      <ul className="cardInfo">
        <li>
          <Link to="#">
            <strong className="cardTitle">{name}</strong>
          </Link>
        </li>
        <li className="cardTitleEnglish">{enName}</li>
        <li className="cardDesc">{description}</li>
        <li className="cardPrice">
          <strong>{priceWithComma}원</strong>
        </li>
      </ul>
    </div>
  );
}

export default ProductCard;
