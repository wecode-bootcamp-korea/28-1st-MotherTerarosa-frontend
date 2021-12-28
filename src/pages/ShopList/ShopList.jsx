import React, { useEffect, useState } from 'react';
import ShopAside from './ShopAside';
import { api } from 'config';
import './ShopList.scss';
import ProductCard from './ProductCard';

function ShopList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api.shopList)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shopList">
      <ShopAside />
      <main className="shopListContent">
        <header className="shopHeader">
          <h3>SHOP</h3>
        </header>
        <section className="productList">
          {products.map((product) => {
            const { id, ...productInfo } = product;
            return <ProductCard key={id} {...productInfo} />;
          })}
        </section>
      </main>
    </div>
  );
}

export default ShopList;
