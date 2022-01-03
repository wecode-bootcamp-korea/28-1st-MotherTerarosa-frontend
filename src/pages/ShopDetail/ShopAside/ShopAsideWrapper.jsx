import React from 'react';
import ShopAside from './ShopAside';

function ShopAsideWrapper({ categories, cateNum }) {
  return (
    <aside className="shopListAside">
      <h3 className="shopListTitle">SHOP</h3>
      <ul className="categoryList">
        {categories.map(category => {
          const { no: id } = category;
          return <ShopAside key={id} cateNum={cateNum} {...category} />;
        })}
      </ul>
    </aside>
  );
}

export default ShopAsideWrapper;
