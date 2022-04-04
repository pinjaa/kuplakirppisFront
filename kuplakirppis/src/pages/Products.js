import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons';

export default function Products({url, addToCart}) {
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
      
      <div className='row align-items-baseline'>
            
        
          <h3>{categoryName}</h3>
        {products.map(product => (
            <div className='col' key={product.id}>
                
                  <Card style={{ width: '18rem', padding:'10px',border:'solid 6px #8ceda7bd', marginLeft:'10px'}}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body style={{paddingBottom:'10px'}}>
                    <Card.Title>{product.tuotenimi} {product.hinta}€</Card.Title>
    
                    <Card.Text>
                    {product.kuvaus}
                    </Card.Text>
                    <Button style={{backgroundColor: "white", borderColor: "white"}} onClick={e => addToCart(product)}><Cart3 size={35} color={'green'} ></Cart3></Button>
      
                    </Card.Body>
                  </Card>
                
            </div>
            
        ))}
          
      </div>
        
      
    </div>
  )
}
