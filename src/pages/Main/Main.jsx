import React, { useState, useEffect, useRef } from 'react';
import ProductsList from './ProductsList/ProductsList';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { api } from 'config.js';
import './Main.scss';

function Main() {
  const [carouselImg, setCarouselImg] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const imgRef = useRef(null);

  // useEffect(() => {
  //   fetch(api.main)
  //     .then(res => res.json())
  //     .then(result => {
  //       setProductsList(result.result);
  //     });
  // }, []);
  useEffect(() => {
    fetch('data/data.json')
      .then(res => res.json())
      .then(data => {
        setProductsList(data.productsLists);
      });
  }, []);

  useEffect(() => {
    imgRef.current.style.transform = `translateX(-${currentImg}00%)`;
    const handleImage = () => {
      getNextImg();
    };
    setTimeout(handleImage, 4000);
    return () => {
      clearTimeout(handleImage);
    };
  }, [currentImg]);

  const getPreImg = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  const getNextImg = () => {
    if (currentImg === carouselImg.length - 1) setCurrentImg(0);
    if (currentImg === carouselImg.length - 1) return;
    setCurrentImg(currentImg + 1);
  };

  return (
    <main className="main">
      <div className="carouselWrapper">
        <div className="carousel" ref={imgRef}>
          {carouselImg.map((imgUrl, i) => (
            <img key={i} alt="img" src={imgUrl} />
          ))}
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
