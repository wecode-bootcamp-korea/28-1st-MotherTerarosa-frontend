import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAsideWrapper from 'components/ShopAside/ShopAsideWrapper';
import ProductImageArea from './ProductImageList/ProductImageArea';
import ProductInfo from './ProductInfo/ProductInfo';
import SkeletonShopDetail from './SkeletonShopDetail';
import { api } from 'config';
import useFetch from 'hooks/useFetch';
import './ShopDetail.scss';
import Modal from 'components/Modal/Modal';

function ShopDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [floatModal, setFloatModal] = useState(false);

  const { data: productDetail, loading: isProductLoading } = useFetch({
    // url: `${api.detail}/${id}`,
    url: 'http://localhost:3000/data/productDetail.json',
  });
  const { data: categories, loading: isCategoryLoading } = useFetch({
    url: api.categories,
  });

  const handleQuantity = e => {
    const { className } = e.target;
    if (className === 'fas fa-plus') setQuantity(quantity => quantity + 1);
    if (className === 'fas fa-minus') {
      if (quantity === 1) return;
      setQuantity(quantity => quantity - 1);
    }
  };

  const productOrderForm = {
    headers: {
      Authorization: 'alskdfjalsijlaskdtf1203924011029ㅋㅋㅋㅋ',
    },
    body: JSON.stringify({
      product_id: id,
      quantity: quantity.toString(),
    }),
  };

  const submitOrderForm = () => {
    console.log({ method: 'POST', ...productOrderForm });
  };

  const handleOrderButton = e => {
    submitOrderForm();
    setFloatModal(true);
  };

  const closeModal = () => {
    setFloatModal(false);
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
          submitOrder={handleOrderButton}
        />
      </main>
      {floatModal && (
        <Modal closeModal={closeModal} quantity={quantity} {...productDetail} />
      )}
    </div>
  );
}

export default ShopDetail;
