import './App.css';
import {Cart} from './components/cart';
import {Items} from './components/items';
import { useState } from 'react';

const mockItems = [
  {
      id: 1,
      label: "Dalida's hat",
      descr: 'The most amazing hat',
      price: 200,
      inCart: false
  },
  {
      id: 2,
      label: "Aidar's keyboard",
      descr: 'Keyboard amazing',
      price: 400,
      inCart: false
  },
  {
      id: 3,
      label: "Milk",
      descr: 'White milk',
      price: 300,
      inCart: false
  }
];

function App() {
  const checkStorageItems = JSON.parse(localStorage.getItem("item"));
  const [items, setItems] = useState(checkStorageItems?checkStorageItems:mockItems);

  const addToCart = (id) => {
    console.log("??");
    const cartItems = items.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          inCart: !item.inCart
        }
      }
      return item;
    })
    setItems(cartItems);
    localStorage.setItem('item',JSON.stringify(cartItems));
  };
  return (
    <div className='root'>
      <Items itemsInShop={items.filter((item) => !item.inCart)} addToCart={addToCart}/>
      <Cart itemsInCart={items.filter((item) => item.inCart)} addToCart={addToCart}/>
    </div>
  );
}

export default App;
//ФУнкционал localstorage items cart, delete, addtoCart, фильтр по цене, и остальные фильтры, категории, красивый UI/UX