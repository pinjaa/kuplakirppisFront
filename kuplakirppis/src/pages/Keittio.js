import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import {Container, Row, Col} from 'react-bootstrap'
export default function Keittio() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
          <h3>Keittiö</h3>
          <p>s</p>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
