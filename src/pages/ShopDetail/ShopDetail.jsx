import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAsideWrapper from 'components/ShopAside/ShopAsideWrapper';
import { api } from 'config';
import { fetchData } from 'utils/fetchData';
import { printNumberWithComma } from 'utils/printNumberWithComma';
import useFetch from 'Hooks/useFetch';
import SkeletonShopDetail from './SkeletonShopDetail';
import './ShopDetail.scss';
import ProductImageList from './ProductImageList/ProductImageList';

function ShopDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { data: productDetail, loading } = useFetch({
    url: `${api.detail}/${id}`,
  });

  useEffect(() => {
    fetchCategories();
    setIsLoading(false);
  }, []);

  const fetchCategories = () => {
    fetchData(api.categories).then(data => {
      const { categories } = data;
      setCategories(categories);
    });
  };

  if (loading) return <SkeletonShopDetail />;

  return (
    <div className="ShopDetail">
      <ShopAsideWrapper categories={categories} cateNum="0" />
      <main className="shopDetailMain">
        <div className="imgArea">
          <div className="bigImage">
            <img
              src={productDetail.image_url[0]}
              alt={`${productDetail.name}상품 이미지`}
            />
          </div>
          <ul className="thumbnailList">
            {productDetail.image_url.map(image => (
              <ProductImageList image={image} />
            ))}
          </ul>
        </div>
        <section className="productInfo">
          <header>
            <h1 className="productTitle">제목</h1>
            <strong className="productPrice">25,000 원</strong>
          </header>
          <dl className="productDescription">
            <dt>상품설명</dt>
            <dd>라즈베리 거슥 거슥</dd>
          </dl>
          <div className="optionTable">
            <span className="productName">제품명</span>
            <div className="productQuantity">
              <input
                className="quantity"
                min="0"
                type="number"
                name="quantity"
                value={quantity}
              />
              <div className="quantityController">
                <i
                  class="fas fa-plus"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                />
                <i
                  class="fas fa-minus"
                  onClick={() => {
                    if (quantity === 1) return;
                    setQuantity(quantity - 1);
                  }}
                />
              </div>
            </div>
            <strong className="productPrice">
              {printNumberWithComma(25000 * quantity)} 원
            </strong>
          </div>
          <dl className="totalPrice">
            <dt>총 상품금액</dt>
            <dd>{printNumberWithComma(25000 * quantity)} 원</dd>
          </dl>

          <div className="productAction">
            <button className="cartButton">장바구니</button>
            <button className="orderButton">구매하기</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ShopDetail;
