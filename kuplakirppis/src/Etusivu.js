
import React from 'react';
import './App.css';
import './Etusivu.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BootstrapCarousel from './components/BootstrapCarousel';
import Categories from './components/Categories';
import Intro from './components/Intro';


function App() {
  return (
    <div className='container-fluid '>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />
          <Intro />
        </div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
