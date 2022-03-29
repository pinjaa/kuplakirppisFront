import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import {Container, Row, Col} from 'react-bootstrap';
import BootstrapCarousel from '../components/BootstrapCarousel';
import { Cart3 } from 'react-bootstrap-icons';
export default function Tuote() {
  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
       
          <Container style={{paddingTop:"10%"}}>
          <Row>
    <Col style={{backgroundColor: "blue",textAlign:"center",height:"500px"}}>  <img src="https://cdn.pixabay.com/photo/2013/07/13/10/45/shoes-157716_1280.png" style={{marginLeft:"auto",marginRight:"auto",display:"block"}}/>
 
    
    </Col>
    
    <Col>
    <h2 style={{backgroundColor: "red"}}>Air jordan </h2>
    <p>hyvät popot vaikka häihin tai hautajaisiin</p> 
    <h3>150e</h3>
    <button className='btn btn-primary'><Cart3 size={55} color={'green'}></Cart3>Lisää ostoskoriin</button>
    </Col>
   
  </Row>
 
  
</Container>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
