import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BootstrapCarousel from '../components/BootstrapCarousel';
import Categories from '../components/Categories';

const URL = 'http://localhost/kuplakirppisBack/';

export default function Frontpage() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        
        <div className='col'>
          <BootstrapCarousel/>
        </div>
        
      </div>
    </div>
  )
}
