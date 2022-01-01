import React from 'react';
import { Link } from 'react-router-dom';
import { printNumberWithComma } from 'utils/printNumberWithComma';
import './ProductCard.scss';

function ProductCard(props) {
  // eslint-disable-next-line prettier/prettier
  const {
    image_url: imageUrl,
    product_name: name,
    product_name_en: enName,
    description,
    price,
  } = props;

  return (
    <div className="productCard">
      <div className="imageWrapper">
        <Link to="#">
          <img src={imageUrl} alt={name} />
        </Link>
      </div>
      <ul className="productCardInfo">
        <li className="titleFont">
          <Link to="#">{name}</Link>
        </li>
        <li className="productCardTitleEnglish">{enName}</li>
        <li className="productCardDesc">{description}</li>
        <li className="productCardPrice fontBold">
          {printNumberWithComma(price)}원
        </li>
      </ul>
    </div>
  );
}

export default ProductCard;
