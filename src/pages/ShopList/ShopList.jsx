import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAside from './ShopAside';
import { api } from 'config';
import './ShopList.scss';
import ProductCard from './ProductCard';

function ShopList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const { cateNum } = useParams();
  console.log(cateNum);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(api.categories).then((res) => res.json());
      const { categories } = response.data;
      setCategories(categories);
    }
    fetchCategories();

    async function fetchProducts() {
      setProducts([]);
      const response = await fetch(api.shopList).then((res) => res.json());
      console.log(response);
      const { category_no: categoryNo, products } = response.data;
      if (categoryNo === cateNum) setProducts(products);
    }
    fetchProducts();
  }, [cateNum]);

  return (
    <div className="shopList">
      <aside className="shopListAside">
        <h3 className="shopListTitle">SHOP</h3>
        <ul className="categoryList">
          {categories.map((category) => {
            const { no: id } = category;
            return <ShopAside key={id} {...category} />;
          })}
        </ul>
      </aside>
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
