import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import {Container, Row, Col} from 'react-bootstrap'

export default function Vaatteet() {
  return (
    
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
        
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
          <h3>Vaatteet</h3>
          <p>Osta hienoja vaatteita.</p>
          <Container>
          <Row>
    <Col><h5>Tuote 1</h5> <img src="https://cdn.pixabay.com/photo/2013/07/13/10/45/shoes-157716_1280.png"/> <p>Tämä tuote on tälläinen</p></Col>
    <Col><h5>Tuote 2</h5> <img src="https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png" /> <p>Tämä tuote on tälläinen</p></Col>
    <Col><h5>Tuote 3</h5> <img src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg"/> <p>Tämä tuote on tälläinen</p></Col>
  </Row>
  
</Container>
          
          
        </div>
        <Footer/>
      </div>
    </div>
    
  )
}
