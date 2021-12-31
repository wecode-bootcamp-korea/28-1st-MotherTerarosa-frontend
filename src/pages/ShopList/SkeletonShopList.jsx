import React from 'react';
import './ShopList.scss';
import './SkeletonShopList.scss';

function SkeletonShopList(props) {
  const sixArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="skeletonShopList">
      <aside className="shopListAside">
        <div className="shopListTitle" />
        <ul className="categoryList">
          <li className="categoryItem" />
          <li className="categoryItem" />
          <li className="categoryItem" />
        </ul>
      </aside>
      <main className="shopListContent">
        <div className="shopHeader" />
        <section className="productList">
          {sixArray.map(item => (
            <div key={item} className="productCard">
              <div className="imageWrapper" />
              <ul className="productCardInfo">
                <li className="productCardInfoItem width30" />
                <li className="productCardInfoItem width50" />
                <li className="productCardInfoItem width70" />
                <li className="productCardInfoItem width30" />
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default SkeletonShopList;
