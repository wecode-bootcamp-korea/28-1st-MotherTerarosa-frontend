import React, { useState, useEffect, useRef } from 'react';
import './Main.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Main() {
  const [carouselImg, setCarouselImg] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/data/carouselImageData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCarouselImg(data.carouselImages);
      });
  }, []);

  useEffect(() => {
    imgRef.current.style.transition = 'all 0.1s linear';
    imgRef.current.style.transform = `translateX(-${currentImg}00%)`;
    setTimeout(() => {
      getNextImg();
    }, 4000);
  }, [currentImg]);

  const getPreImg = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  const getNextImg = () => {
    if (currentImg === carouselImg.length - 1) return;
    setCurrentImg(currentImg + 1);
  };

  return (
    <main className="main">
      <div className="carouselWrapper">
        <div className="carousel" ref={imgRef}>
          {carouselImg.map((imgSrc, i) => (
            <img key={i} alt="img" src={imgSrc} />
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
    </main>
  );
}

export default Main;
