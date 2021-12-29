import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAside from './ShopAside';
import { api } from 'config';
import './ShopList.scss';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

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
  }, [cateNum]);

  async function fetchCategories() {
    const response = await fetch(api.categories).then((res) => res.json());
    const { categories } = response.data;
    setCategories(categories);
  }

  async function fetchProducts() {
    // TODO: 이부분 고생 진짜 많이 했으니까 블로그에 꼭 쓰기 (2차 카테고리 필터 구현)
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
      <aside className="shopListAside">
        <h3 className="shopListTitle">SHOP</h3>
        <ul className="categoryList">
          {categories.map((category) => {
            const { no: id } = category;
            return <ShopAside key={id} cateNum={cateNum} {...category} />;
          })}
        </ul>
      </aside>
      <main className="shopListContent">
        <header className="shopHeader">
          <h3>SHOP</h3>
        </header>
        <section className="productList">
          {getCurrentProducts(products).map((product) => {
            const { id, ...productInfo } = product;
            return <ProductCard key={id} {...productInfo} />;
          })}
        </section>

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
