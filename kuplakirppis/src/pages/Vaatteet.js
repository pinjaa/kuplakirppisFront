import React from 'react';
import Header from '..components/Header';
import Footer from '..components/Footer';
import Navbar from '../components/Navbar';
import BootstrapCarousel from '..components/BootstrapCarousel';
import Categories from '..components/Categories';

export default function Frontpage() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
          <h3>Vaatteet</h3>
          <p>osta vaatteita  jkberuhr burgragehr buidfghuiery  weygwea twyugjh vo8voteovrtou uwrohrzohi oro</p>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
