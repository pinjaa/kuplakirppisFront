import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import BootstrapCarousel from './BootstrapCarousel';
import Categories from './Categories';
import Intro from './Intro';

const URL = 'http://localhost/kuplakirppisBack/';

export default function Frontpage() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories url={URL} />
        </div>
        <div className='col'>
          <Navbar />  
        
          <Intro />
          <BootstrapCarousel/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
