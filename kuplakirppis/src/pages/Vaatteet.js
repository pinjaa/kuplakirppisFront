import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons';

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
          <Row style={{paddingLeft:'10px'}}>
    <Col>
    <Card style={{ width: '18rem', padding:'10px',border:'solid 6px #8ceda7bd' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/13/10/45/shoes-157716_1280.png" />
  <Card.Body style={{paddingBottom:'10px'}}>
    <Card.Title>Kengät 50€</Card.Title>
  
    <Card.Text>
      Voi miten hienot kengät, osta osta!
    </Card.Text>
   <a href='https://www.youtube.com/'> <Cart3 size={35} color={'green'}></Cart3></a>
    
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem', padding:'10px',border:'solid 6px #8ceda7bd' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png" />
  <Card.Body>
    <Card.Title>Puhelin 500€</Card.Title>
    
    <Card.Text>
      Ostappa uusi ja mahtava puhelin.
    </Card.Text>
    <Cart3 size={35} color={'green'}></Cart3>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem',  padding:'10px',border:'solid 6px #8ceda7bd' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
  <Card.Body>
    <Card.Title>Auto 100 000€</Card.Title>
    
    <Card.Text>
      Loistava ja nopea auto.
    </Card.Text>
    <Cart3 size={35} color={'green'}></Cart3>
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem',  padding:'10px',border:'solid 6px #8ceda7bd'}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1605306792171-9394b91eb0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Olut 3€</Card.Title>
    
    <Card.Text>
     Kylmä olut!
    </Card.Text>
    <Cart3 size={35} color={'green'}></Cart3>
  </Card.Body>
</Card>
    </Col>
  
  </Row>
  

  
</Container>
          
          
        </div>
        <Footer/>
      </div>
    </div>
    
  )
}
