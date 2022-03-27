import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import {Container, Row, Col} from 'react-bootstrap';
import BootstrapCarousel from '../components/BootstrapCarousel';
export default function Tuote() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
          <h3>Kotis</h3>
          <p>s</p>
          <Container>
          <Row>
    <Col style={{backgroundColor: "blue",textAlign:"center"}}> <h1 style={{backgroundColor: "red"}}>Hello Style!</h1> <img src="https://cdn.pixabay.com/photo/2013/07/13/10/45/shoes-157716_1280.png" style={{marginLeft:"auto",marginRight:"auto",display:"block"}}/> 
    <p>Tämä tuote on tälläinen</p> </Col>
   
  </Row>
  <BootstrapCarousel/>
  
</Container>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
