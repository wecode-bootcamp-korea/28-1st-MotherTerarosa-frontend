import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShopAside(props) {
  const { no, name, categories } = props;
  const [isClickedMore, setIsClickedMore] = useState(false);

  return (
    <li className="categoryItem">
      <div className="categoryContent">
        <Link to={`/shoplist/category/${no}`}>{name}</Link>
        {categories[0] && (
          <i
            className={`fas ${isClickedMore ? 'fa-minus' : 'fa-plus'} `}
            onClick={() => {
              setIsClickedMore(!isClickedMore);
            }}
          />
        )}
      </div>
      {categories && (
        <ul className={`categoryList2Dep ${isClickedMore ? 'isActive' : ''} `}>
          {categories.map((category) => (
            <li key={category.no}>
              <Link to={`/shoplist/category/${category.no}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ShopAside;
