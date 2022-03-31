
import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BootstrapCarousel from './components/BootstrapCarousel';
import Categories from './components/Categories';
import Tuote from './pages/Tuote';
import Products from './pages/Products';
import Order from './pages/Order';
import Register from './pages/Register';

const URL = 'http://localhost/kuplakirppisBack/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  //lisää tuote ostoskoriin
  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  //poista tuote ostoskorista
  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  return (
    <>
      <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories url={URL}/>
        </div>
        <div className='col'>
          <Navbar cart={cart}/> 
      <div className='container'>
        <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart} />} />
        <Route path='/pages/Tuote' element={<Tuote/>}/>
        <Route path='/pages/Register' element={<Register/>}/>
        </Routes>
      </div>
      </div>
        <Footer/>
      </div>
    </div>
    </>
 
  );
}

export default App;
