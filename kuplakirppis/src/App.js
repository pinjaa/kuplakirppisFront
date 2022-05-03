
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
import Login from './components/Login';
import NotFound from './components/NotFound';
import Info from './pages/Info';
import Feedback from './pages/Feedback';
import Customer from './pages/Customer';
import CategoryList from './components/CategoryList';
import ManageCategories from './admin/ManageCategories';
import ManageProducts from './admin/ManageProducts';
import Cart from './components/Cart';
import Admin from './admin/Admin';
import Desk from './pages/Desk';
import UpdateProduct from './admin/UpdateProduct';
import ManageOrders from './admin/ManageOrders';
import ManageUsers from './admin/ManageUsers';

const URL = 'http://localhost/kuplakirppisBack/';

function App() {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }

    if (window.innerWidth > 1100) {
      document.getElementById("categories").classList.add("categories-opennav");
      document.getElementById("main").classList.add("main-opennav");
    }
  }, [])
  
  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  //lisää tuote ostoskoriin
  function addToCart(product) {
    var inCart = 0;
    cart.forEach(item => {
      if(item.id == product.id) {
        inCart = 1;
      }
    });

    if(inCart) {
      alert("Tuote on jo ostoskorissa");
    }else {
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
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
          <Navbar cart={cart} url={URL} setIsAdmin={setIsAdmin}/> 
      <div className='container main-container'>
        <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path='/pages/Tuote/:categoryId/:productId' element={<Tuote url={URL} addToCart={addToCart}/>} />
        <Route path='/order' element={<Order cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} url={URL}/>} />
        <Route path='/pages/Register' element={<Register />}/>
        <Route path='/pages/OrderForm' element={<OrderForm cart={cart} emptyCart={emptyCart}/>}/>
        <Route path='/components/Login' element={<Login setIsAdmin={setIsAdmin}/>}/>
        <Route path='*' element={<NotFound />} />
        <Route path="/pages/Info" element={<Info />} />
        <Route path="/pages/Feedback" element={<Feedback />} />
        <Route path="/pages/Customer" element={<Customer  url={URL} />} />
        <Route path="/search/:searchPhrase" element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path="/components/CategoryList" element={<CategoryList url={URL} />} /> 
        <Route path='/admin/ManageCategories' element={<ManageCategories url={URL} isAdmin={isAdmin}/>}/>
        <Route path='/admin/ManageProducts' element={<ManageProducts url={URL} isAdmin={isAdmin}/>}/>
        <Route path='/admin/Admin' element={<Admin isAdmin={isAdmin}/>}/>
        <Route path='/pages/Desk' element={<Desk/>}/>
        <Route path='/admin/UpdateProduct/:categoryId/:productId' element={<UpdateProduct url={URL} isAdmin={isAdmin}/>}/>
        <Route path='/admin/ManageOrders' element={<ManageOrders url={URL} isAdmin={isAdmin}/>}/>
        <Route path='/admin/ManageUsers' element={<ManageUsers url={URL} isAdmin={isAdmin}/>}/>
        </Routes>
      </div>
      <div className='mobile-cart'><Cart cart={cart}/></div>
      </div>
    </>
 
  );
}

export default App;
