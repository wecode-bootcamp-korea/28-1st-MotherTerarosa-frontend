import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAsideWrapper from './ShopAside/ShopAsideWrapper';
import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';
import { api } from 'config';
import './ShopList.scss';

function ShopList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;

  const { cateNum } = useParams();

  //TODO: isLoading 위치 찾기

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    setCurrentPage(1);
  }, [cateNum]);

  async function fetchCategories() {
    const response = await fetch(api.categories).then((res) => res.json());
    const { categories } = response.data;
    setCategories(categories);
  }

  async function fetchProducts() {
    setProducts([]);
    const response = await fetch(api.products).then((res) => res.json());
    const productsInfoFilteredByCategory = response.data.filter((category) =>
      category.category_no.includes(cateNum),
    );
    const filteredProducts = productsInfoFilteredByCategory.reduce(
      (accumulator, currentCategory) => [...accumulator, ...currentCategory.products],
      [],
    );

    setProducts(filteredProducts);
    setIsLoading(false);
  }

  const indexOfLast = currentPage * productPerPage;
  const indexOfFirst = indexOfLast - productPerPage;

  const getCurrentProducts = (entireProducts) => {
    const currentProducts = entireProducts.slice(indexOfFirst, indexOfLast);
    return currentProducts;
  };

  if (isLoading) {
    return <h1>로딩중이다....</h1>;
  }

  return (
    <div className="shopList">
      <ShopAsideWrapper categories={categories} cateNum={cateNum} />
      <main className="shopListContent">
        <header className="shopHeader">
          <h3>SHOP</h3>
        </header>
        <ProductList products={products} getCurrentProducts={getCurrentProducts} />
        <Pagination
          productPerPage={productPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
}

export default ShopList;
