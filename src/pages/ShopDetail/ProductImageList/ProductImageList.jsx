import React from 'react';

function ProductImageList({ image }) {
  return (
    <li className="thumbnailItem">
      <img src={image} alt="" />
    </li>
  );
}

export default ProductImageList;
