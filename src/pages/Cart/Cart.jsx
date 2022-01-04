import React, { useState, useEffect } from 'react';
import SelectedItem from './SelectedItem/SelectedItem';
import './Cart.scss';

export default function Cart() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('data/cart.json')
      .then(res => res.json())
      .then(data => setDatas(data));
  }, []);

  return (
    <div className="cart">
      <div className="path">
        <span className="home">home</span> {'>'}
        <span className="cartInPath">장바구니</span>
      </div>
      <div className="titleWrapper">
        <p>SHOPPING CART</p>
        <p>장바구니</p>
      </div>
      <table className="selectedItems">
        <thead className="tableHeader">
          <tr>
            <th>
              <input
                className="motherCheckbox"
                type="checkbox"
                defaultChecked={true}
              />
            </th>
            <th className="prudctName">상품명</th>
            <th className="price">판매가</th>
            <th className="quantity">수량</th>
            <th className="deliveryPrice">배송비</th>
            <th className="sumPrice">합계</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(data => (
            <SelectedItem
              key={data.id}
              id={data.id}
              name={data.product_name}
              price={data.price}
              initialQuantity={data.quantity}
              delivery={data.delivery_price}
              imgSrc={data.img_url}
            />
          ))}
        </tbody>
      </table>
      <div className="totalPriceWrapper">
        상품 구매 합계 000 원 + 총 배송비 000 원
        <span className="totalPrice">총 주문금액 000 원</span>
      </div>
    </div>
  );
}
