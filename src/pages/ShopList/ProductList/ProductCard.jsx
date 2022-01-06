import React from 'react';
import { Link } from 'react-router-dom';
import { printNumberWithComma } from 'utils/printNumberWithComma';
import './ProductCard.scss';

function ProductCard(props) {
  const {
    id,
    thumbnail_image_url: imageUrl,
    product_name: name,
    product_name_en: enName,
    description,
    price,
  } = props;

  const linkUrl = `/productdetail/${id}`;

  return (
    <div className="productCard">
      <div className="imageWrapper">
        <Link to={linkUrl}>
          <img src={imageUrl} alt={name} />
        </Link>
      </div>
      <ul className="productCardInfo">
        <li className="titleFont">
          <Link to={linkUrl}>{name}</Link>
        </li>
        <li className="productCardTitleEnglish">{enName}</li>
        <li className="productCardDesc">
          {description ? description : '마더테라로사 대표상품'}
        </li>
        <li className="productCardPrice fontBold">
          {printNumberWithComma(price)}원
        </li>
      </ul>
    </div>
  );
}

export default ProductCard;
