
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BootstrapCarousel from './components/BootstrapCarousel';
import Categories from './components/Categories';
import Tuote from './pages/Tuote';
import Products from './pages/Products';

const URL = 'http://localhost/kuplakirppisBack/';

function App() {
  return (
    <>
      <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories url={URL}/>
        </div>
        <div className='col'>
          <Navbar /> 
      <div className='container'>
        <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/products/:categoryId' element={<Products url={URL}/>} />
        <Route path='/pages/Tuote' element={<Tuote/>}/>
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
