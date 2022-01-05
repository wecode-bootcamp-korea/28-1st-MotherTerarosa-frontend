import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { api } from 'config.js';
import ProductsList from './ProductsList/ProductsList';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Main.scss';

function Main() {
  const [currentImg, setCurrentImg] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const imgRef = useRef(null);

  // 데이터 와라
  // useEffect(() => {
  //   fetch(api.main)
  //     .then(res => res.json())
  //     .then(result => {
  //       setProductsList(result.result);
  //       console.log(result.result);
  //     });
  // }, []);

  useEffect(() => {
    imgRef.current.style.transform = `translateX(-${currentImg}00%)`;
  }, [currentImg]);

  useEffect(() => {
    const getNextImgByTimer = () => getNextImg();
    const timer = setTimeout(getNextImgByTimer, 1000);
    console.log(currentImg);
    return () => {
      clearTimeout(timer);
    };
  }, [currentImg]);

  const getPreImg = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg => currentImg - 1);
  };

  const getNextImg = () => {
    if (currentImg === 3) return;
    setCurrentImg(currentImg => currentImg + 1);
  };

  return (
    <main className="main">
      <div className="carouselWrapper">
        <div className="carousel" ref={imgRef}>
          {/* 해당부분 링크는 열어주시는 분 아이피로 수정 요함 */}
          {/* <Link to="http://10.58.7.78:8000/products/productdetail/3"> */}
          <img alt="1" src="images/carousel/01.jpg" />
          {/* </Link> */}
          {/* <Link to="http://10.58.7.78:8000/products/productdetail/4"> */}
          <img alt="2" src="images/carousel/02.jpg" />
          {/* </Link> */}
          {/* <Link to="http://10.58.7.78:8000/products/productdetail/12"> */}
          <img alt="3" src="images/carousel/03.jpg" />
          {/* </Link> */}
          {/* <Link to="http://10.58.7.78:8000/products/productdetail/14"> */}
          <img alt="5" src="images/carousel/05.jpeg" />
          {/* </Link> */}
        </div>
        <div className="arrowWrapper">
          <MdKeyboardArrowLeft
            className="arrow"
            size="40"
            type="button"
            onClick={getPreImg}
          />
          <MdKeyboardArrowRight
            className="arrow"
            size="40"
            type="button"
            onClick={getNextImg}
          />
        </div>
      </div>
      <div className="productsListWrapper">
        {productsList.map(productsLists => (
          <ProductsList key={productsLists.id} productsLists={productsLists} />
        ))}
      </div>
    </main>
  );
}

export default Main;
