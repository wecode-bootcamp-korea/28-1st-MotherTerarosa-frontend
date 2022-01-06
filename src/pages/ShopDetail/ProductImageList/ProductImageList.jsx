import React from 'react';

function ProductImageList(props) {
  const { image, index, changeThumbnailImage } = props;

  return (
    <li
      className="thumbnailItem"
      onClick={() => {
        changeThumbnailImage(index);
      }}
    >
      <img src={image} alt="" />
    </li>
  );
}

export default ProductImageList;
