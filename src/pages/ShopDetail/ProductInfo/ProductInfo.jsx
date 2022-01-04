import React from 'react';
import { printNumberWithComma } from 'utils/printNumberWithComma';

function ProductInfo(props) {
  const { name, description, price, quantity, handleQuantity } = props;

  return (
    <section className="productInfo">
      <header>
        <h1 className="productTitle">{name}</h1>
        <strong className="productPrice">
          {printNumberWithComma(price)} 원
        </strong>
      </header>
      <dl className="productDescription">
        <dt>상품설명</dt>
        <dd>{description}</dd>
      </dl>
      <div className="optionTable">
        <span className="productName">{name}</span>
        <div className="productQuantity">
          <input
            className="quantity"
            min="0"
            type="number"
            name="quantity"
            value={quantity}
          />
          <div className="quantityController">
            <i className="fas fa-plus" onClick={handleQuantity} />
            <i className="fas fa-minus" onClick={handleQuantity} />
          </div>
        </div>
        <strong className="productPrice">
          {printNumberWithComma(price)} 원
        </strong>
      </div>
      <dl className="totalPrice">
        <dt>총 상품금액</dt>
        <dd>{printNumberWithComma(price * quantity)} 원</dd>
      </dl>

      <div className="productAction">
        <button className="cartButton">장바구니</button>
        <button className="orderButton">구매하기</button>
      </div>
    </section>
  );
}

export default ProductInfo;
