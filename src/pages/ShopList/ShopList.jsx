import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopAsideWrapper from './ShopAside/ShopAsideWrapper';
import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';
import SkeletonShopList from './SkeletonShopList';
import { api } from 'config';
import { fetchData, getProductsRelatedCategory } from 'utils/fetchData';
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
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
    setCurrentPage(1);

    return () => {
      setProducts([]);
    };
  }, [cateNum]);

  const fetchCategories = () => {
    fetchData(api.categories).then(data => {
      const { categories } = data;
      setCategories(categories);
    });
  };

  const fetchProducts = () => {
    if (cateNum) {
      fetchData(api.products).then(data => {
        setProducts(getProductsRelatedCategory(data, cateNum));
        setIsLoading(false);
      });
    }
  };

  const indexOfLast = currentPage * productPerPage;
  const indexOfFirst = indexOfLast - productPerPage;

  const getCurrentProducts = entireProducts => {
    const currentProducts = entireProducts.slice(indexOfFirst, indexOfLast);
    return currentProducts;
  };

  if (isLoading) {
    return <SkeletonShopList />;
  }

  return (
    <div className="shopList">
      <ShopAsideWrapper categories={categories} cateNum={cateNum} />
      <main className="shopListContent">
        <header className="shopHeader">
          <h3 className="titleFont">SHOP</h3>
        </header>
        <ProductList
          products={products}
          getCurrentProducts={getCurrentProducts}
        />
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
