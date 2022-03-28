import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
/* import BootstrapCarousel from './BootstrapCarousel'; */
import Categories from './Categories';

export default function Frontpage() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit nulla sequi distinctio, iusto delectus architecto dolor cupiditate sint aliquam, culpa expedita. Dolorum mollitia obcaecati unde tempora aliquam possimus labore!</p>
         {/*  <BootstrapCarousel/> */}
        </div>
        <Footer/>
      </div>
    </div>
  )
}
