import React, { useState, useEffect, useRef } from 'react';
import ProductsList from './ProductsList/ProductsList';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Main.scss';

function Main() {
  const [carouselImg, setCarouselImg] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const imgRef = useRef(null);

  useEffect(() => {
    fetch('data/Data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCarouselImg(data.carouselImages);
        setProductsList(data.productsLists);
      });
  }, []);

  useEffect(() => {
    // 렌더가 한번 끝나고 실행되는 함수
    imgRef.current.style.transition = 'all 0.1s linear';
    imgRef.current.style.transform = `translateX(-${currentImg}00%)`;
    const handleImage = () => {
      getNextImg();
      console.log('타이머 4초 일해라, 현재이미지', currentImg);
    };
    setTimeout(handleImage, 4000);

    return () => {
      clearTimeout(handleImage);
    };
  }, [currentImg]);

  // Work Flow
  // 1. arrow button 을 눌렀을 때 currentImg 가 바뀐다.
  // 2. currentImg 가 바뀌니까 useEffect 호출이됨.
  // 3. useEffect에 뭐가 있나요?
  // 4. nextImg로 보내주는 함수가 실행되고 있습니다.
  // 5. 그럼 저희가 3번 뒤로가기 버튼을 누르면
  // 6. useEffect가 3번 실행이 되니 4초뒤에 3번 앞으로 다시 가는겁니다.
  // 버그정리 끝.

  // effect 부분만 잘 손질하면 될 것 같아요 특히 trigger 부분 CurrentImg 말고 딴거

  const getPreImg = () => {
    // 렌더 시에 실행되는 함수
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
    console.log('당겼다, 현재이미지', currentImg);
  };

  const getNextImg = () => {
    if (currentImg === carouselImg.length - 1) setCurrentImg(0);
    if (currentImg === carouselImg.length - 1) return;
    setCurrentImg(currentImg + 1);
    console.log('밀었다, 현재이미지', currentImg);
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
