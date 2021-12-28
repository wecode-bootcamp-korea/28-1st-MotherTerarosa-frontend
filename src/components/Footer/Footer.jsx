import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="customerServiceWrapper">
        <p className="footerHeader">031-262-5973</p>
        <p>서비스센터 영업 시간 : 00:00 ~ 24:00 </p>
        <p>서비스센터 휴무 : 없음</p>
      </div>

      <div className="bankInfo">
        <p className="footerHeader">우리은행</p>
        <p>1002 744 000000</p>
        <p>예금주 테레사</p>
      </div>
      <div className="footerInfo">
        <p className="footerHeader">마더 테라로사</p>
        <p>강현구 노세인 박윤국 성윤경 이민석 엄성용</p>
        <p>lov012726@gmail.com</p>
        <p>ⓒ2021 MOTHERTERAROSA ALL RIGHT RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;
