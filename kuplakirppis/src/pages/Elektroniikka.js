import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';

export default function Elektroniikka() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
          <h3>Elektroniikka ja Kodinkoneet</h3>
          <p>pesukonex4</p>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
