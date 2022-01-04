import React, { useState, useEffect } from 'react';
import './SelectedItem.scss';

export default function SelectedItem({
  id,
  name,
  price,
  initialQuantity,
  delivery,
  imgSrc,
}) {
  const [checker, setChecker] = useState(true);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [checkedList, setCheckedList] = useState([]);

  const updateChecker = e => setChecker(e.target.checked);
  const updateQuantity = e => setQuantity(e.target.value);

  useEffect(() => {
    const checkedItem = {
      id,
      quantity,
    };
    const addItem = () => setCheckedList([...checkedList, checkedItem]);
    const deleteItem = id => {
      checkedList.filter(checkedItem => checkedItem.id !== id);
    };
    checker ? addItem() : deleteItem();
  }, [checker]);

  return (
    <tr id={id}>
      <th>
        <input
          className="childrenCheckbox"
          type="checkbox"
          name="selecedItemId"
          value={id}
          defaultChecked={true}
          onChange={updateChecker}
        />
      </th>
      <th className="prudctName">
        <div className="imageWrapper">
          <img alt="상품이미지" src={imgSrc} />
        </div>
        <div>{name}</div>
      </th>
      <th className="price">{price}</th>
      <th className="quantity">
        <input
          type="number"
          min="0"
          defaultValue={initialQuantity}
          onChange={updateQuantity}
        />
      </th>
      <th className="deliveryPrice">{delivery}</th>
      <th className="sumPrice">{price * quantity}</th>
    </tr>
  );
}
