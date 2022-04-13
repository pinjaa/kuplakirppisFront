
import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Tuote from './pages/Tuote';
import Products from './pages/Products';
import Order from './pages/Order';
import Register from './pages/Register';
import OrderForm from './pages/OrderForm';
import LoginForm from './components/Login';
import NotFound from './components/NotFound';
import Info from './pages/Info';
import Feedback from './pages/Feedback';
import Customer from './pages/Customer';

const URL = 'http://localhost/kuplakirppisBack/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  
  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

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

          <Categories url={URL}/>

        <div id='main' style={{paddingBottom:'20px', transition: '0.5s'}} className='col'>
          <Navbar cart={cart}/> 
      <div className='container main-container'>
        <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path='/pages/Tuote/:categoryId/:productId' element={<Tuote url={URL} addToCart={addToCart}/>} />
        <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} url={URL}/>} />
        <Route path='/pages/Register' element={<Register url={URL}/>}/>
        <Route path='/pages/OrderForm' element={<OrderForm cart={cart} emptyCart={emptyCart}/>}/>
        <Route path='/components/Login' element={<LoginForm url={URL}/>}/>
        <Route path='*' element={<NotFound />} />
        <Route path="/pages/Info" element={<Info />} />
        <Route path="/pages/Feedback" element={<Feedback />} />
        <Route path="/pages/Customer" element={<Customer />} />
        <Route path="/search/:searchPhrase" element={<Products url={URL} />} />
        </Routes>
      </div>
      </div>
        <Footer/>
    </>
 
  );
}

export default App;
