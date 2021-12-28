import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShopAside(props) {
  const [isClickedMore, setIsClickedMore] = useState(false);
  return (
    <aside className="shopListAside">
      <h3 className="shopListTitle">SHOP</h3>
      <ul className="categoryList">
        <li className="categoryItem">
          <Link to="#">연말 선물</Link>
        </li>
        <li className="categoryItem">
          <div className="categoryContent">
            <Link to="#">커피</Link>
            <i
              className={`fas ${isClickedMore ? 'fa-minus' : 'fa-plus'} `}
              onClick={() => {
                setIsClickedMore(!isClickedMore);
              }}
            />
          </div>
          <ul className={`categoryList2Dep ${isClickedMore ? 'isActive' : ''} `}>
            <li>
              <Link to="#">싱글오리진</Link>
            </li>
            <li>
              <Link to="#">블렌드</Link>
            </li>
            <li>
              <Link to="#">드립백</Link>
            </li>
            <li>
              <Link to="#">생두</Link>
            </li>
          </ul>
        </li>
        <li className="categoryItem">
          <Link to="#">식품</Link>
        </li>
      </ul>
    </aside>
  );
}

export default ShopAside;
