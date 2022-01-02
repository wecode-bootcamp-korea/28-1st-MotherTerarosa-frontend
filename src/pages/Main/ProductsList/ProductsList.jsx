import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductsList.scss';

export default function ProductsList({ productsLists }) {
  return (
    <section className="productsList">
      <h1>{productsLists.categoryName}</h1>
      <div className="moreShopping">+SHOP</div>
      <div className="products">
        {productsLists.products.map(products => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </section>
  );
}
