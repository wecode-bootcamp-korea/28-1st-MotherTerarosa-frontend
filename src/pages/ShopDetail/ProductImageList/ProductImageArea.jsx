import React, { useState } from 'react';
import ProductImageList from './ProductImageList';

function ProductImageArea({ images, productName }) {
  const [thumbnailImage, setThumbnailImage] = useState(images[0]);
  const changeThumbnailImage = index => setThumbnailImage(images[index]);

  return (
    <div className="imgArea">
      <div className="bigImage">
        <img src={thumbnailImage} alt={`${productName}상품 이미지`} />
      </div>
      <ul className="thumbnailList">
        {images.map((image, index) => (
          <ProductImageList
            key={index}
            index={index}
            image={image}
            changeThumbnailImage={changeThumbnailImage}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductImageArea;
