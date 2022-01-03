import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAsideWrapper from './ShopAside/ShopAsideWrapper';
import { api } from 'config';
import { fetchData } from 'utils/fetchData';
import { printNumberWithComma } from 'utils/printNumberWithComma';
import './ShopDetail.scss';
import SkeletonShopDetail from './SkeletonShopDetail';

function ShopDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [detailContents, setDetailContents] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

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

  if (isLoading) return <SkeletonShopDetail />;

  return (
    <div className="ShopDetail">
      <ShopAsideWrapper categories={categories} cateNum="0" />
      <main className="shopDetailMain">
        <div className="imgArea">
          <div className="bigImage">
            <img
              src="https://terarosa.com/web/product/extra/big/202112/3761f9546affdc6e083d42453af832f1.jpg"
              alt="상품디테일이미지"
            />
          </div>
          <ul className="thumbnailList">
            <li className="thumbnailItem">
              <img
                src="https://terarosa.com/web/product/small/202112/9ec978dd3e829c01e3a2817b22d4410b.jpg"
                alt=""
              />
            </li>
            <li className="thumbnailItem">
              <img
                src="https://terarosa.com/web/product/extra/small/202112/1461d46676614852a3cda0afbebd951d.jpg"
                alt=""
              />
            </li>
            <li className="thumbnailItem">
              <img
                src="https://terarosa.com/web/product/extra/small/202112/d5be7bb80099ef56c9077e09baa2e0ec.jpg"
                alt=""
              />
            </li>
            <li className="thumbnailItem">
              <img
                src="	https://terarosa.com/web/product/extra/small/202112/3761f9546affdc6e083d42453af832f1.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <section className="productInfo">
          <header>
            <h1 className="productTitle">제품명</h1>
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
