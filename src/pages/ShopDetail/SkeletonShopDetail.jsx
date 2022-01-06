import React from 'react';
import './ShopDetail.scss';
import './SkeletonShopDetail.scss';

function SkeletonShopDetail(props) {
  return (
    <div className="skeletonShopDetail">
      <aside className="shopListAside">
        <div className="shopListTitle" />
        <ul className="categoryList">
          <li className="categoryItem" />
          <li className="categoryItem" />
          <li className="categoryItem" />
        </ul>
      </aside>
      <div className="ShopDetail">
        <main className="shopDetailMain">
          <div className="imgArea">
            <div className="bigImage" />
            <ul className="thumbnailList">
              <li className="thumbnailItem" />
              <li className="thumbnailItem" />
              <li className="thumbnailItem" />
              <li className="thumbnailItem" />
            </ul>
          </div>
          <section className="productInfo">
            <header>
              <div className="productTitle" />
              <div className="productPrice" />
            </header>
            <div className="optionTable" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default SkeletonShopDetail;
