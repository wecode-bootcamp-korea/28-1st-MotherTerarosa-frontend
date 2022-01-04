import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAsideWrapper from 'components/ShopAside/ShopAsideWrapper';
import ProductImageArea from './ProductImageList/ProductImageArea';
import SkeletonShopDetail from './SkeletonShopDetail';
import { api } from 'config';
import useFetch from 'Hooks/useFetch';
import './ShopDetail.scss';
import ProductInfo from './ProductInfo/ProductInfo';

function ShopDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: productDetail, loading: isProductLoading } = useFetch({
    url: api.detail,
    // url: `${api.detail}/${id}`,
  });

  const { data: categories, loading: isCategoryLoading } = useFetch({
    url: api.categories,
  });

  const handleQuantity = e => {
    const { className } = e.target;
    if (className === 'fas fa-plus') setQuantity(quantity + 1);
    if (className === 'fas fa-minus') {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };

  if (isCategoryLoading || isProductLoading) return <SkeletonShopDetail />;

  return (
    <div className="ShopDetail">
      <ShopAsideWrapper categories={categories.categories} cateNum="0" />
      <main className="shopDetailMain">
        <ProductImageArea
          images={productDetail.image_url}
          productName={productDetail.name}
        />
        <ProductInfo
          {...productDetail}
          quantity={quantity}
          handleQuantity={handleQuantity}
        />
      </main>
    </div>
  );
}

export default ShopDetail;
