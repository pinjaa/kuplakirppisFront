import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons';

export default function Products({url}) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
      axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
          const json = response.data;
          setCategoryName(json.category);
          setProducts(json.products);
      }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
      })
    }, [params])
    

  return (
    <div className='container-fluid'>
      <div className='row g-0'>
        
        <div className='col'>
            
        
          <h3>{categoryName}</h3>
        {products.map(product => (
            <div key={product.id}>
                <Col>
                  <Card style={{ width: '18rem', padding:'10px',border:'solid 6px #8ceda7bd' }}>
                    <Card.Img variant="top" src={require("../images/kuplalogo1.0.png")} />
                    <Card.Body style={{paddingBottom:'10px'}}>
                    <Card.Title>{product.tuotenimi} {product.hinta}€</Card.Title>
    
                    <Card.Text>
                    {product.kuvaus}
                    </Card.Text>
                    <Cart3 size={35} color={'green'}></Cart3>
      
                    </Card.Body>
                  </Card>
                </Col>
            </div>
            
        ))}
          
        </div>
        
      </div>
    </div>
  )
}
