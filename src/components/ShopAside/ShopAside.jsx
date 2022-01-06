import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopAside.scss';

function ShopAside(props) {
  const { no, name, sub_categories: subCategories, cateNum } = props;
  const [isClickedMore, setIsClickedMore] = useState(false);
  const hasSubCategory = subCategories[0];
  useEffect(() => {
    setIsClickedMore(false);
    if (cateNum.includes('200')) setIsClickedMore(true);
  }, [cateNum]);

  return (
    <li className="categoryItem">
      <div className="categoryContent">
        <Link to={`/productlist?category=${no}`}>{name}</Link>
        {hasSubCategory && (
          <i
            className={`fas ${isClickedMore ? 'fa-minus' : 'fa-plus'} `}
            onClick={() => {
              setIsClickedMore(!isClickedMore);
            }}
          />
        )}
      </div>
      <ul className={`categoryList2Dep ${isClickedMore ? 'isActive' : ''} `}>
        {subCategories.map(category => (
          <li key={category.no}>
            <Link to={`/productlist?category=${category.no}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ShopAside;
