import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, getCurrentProducts }) {
  return (
    <section className="productList">
      {getCurrentProducts(products).map((product) => {
        const { id, ...productInfo } = product;
        return <ProductCard key={id} {...productInfo} />;
      })}
    </section>
  );
}

export default ProductList;
