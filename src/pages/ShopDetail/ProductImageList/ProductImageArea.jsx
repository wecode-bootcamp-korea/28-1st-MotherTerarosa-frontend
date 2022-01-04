import React from 'react';
import ProductImageList from './ProductImageList';

function ProductImageArea({ images, productName }) {
  return (
    <div className="imgArea">
      <div className="bigImage">
        <img src={images[0]} alt={`${productName}상품 이미지`} />
      </div>
      <ul className="thumbnailList">
        {images.map((image, index) => (
          <ProductImageList key={index} image={image} />
        ))}
      </ul>
    </div>
  );
}

export default ProductImageArea;
