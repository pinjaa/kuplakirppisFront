import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons';
import Tuote from './Tuote'

export default function Products({url, addToCart}) {
    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
      let address = '';
      if (params.searchPhrase === undefined) {
        address = url + 'products/getproducts.php/' + params.categoryId;
      } else {
        address = url + 'products/searchproducts.php/' + params.searchPhrase;
      }

   axios.get(address)
      .then((response) => {
          const json = response.data;
          if (params.searchPhrase === undefined) {
            setName(json.category);
            setProducts(json.products);
          } else {
            setName(params.searchPhrase);
            setProducts(json);
          }
         
      }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
      })
    }, [params])  
    

  return (
    <div className='container-fluid'>
      
      <div className='row align-items-baseline'>
            
        
          <h3>{name}</h3>
        {products.map(product => (
            <div className='col-md-4 g-4' key={product.id}>
                <Link to={'../pages/Tuote/' + product.ktg_nro + '/' + product.id}>
                  <Card className="product-card">
                    <Card.Img style={{objectFit: 'cover'}} variant="top" src={url + "images/" + product.image} />
                    <Card.Body style={{paddingBottom:'10px'}}>
                    <Card.Title className='card-title'>{product.tuotenimi} {product.hinta}€</Card.Title>
    
                    {/* <Card.Text>
                    {product.kuvaus}
                    </Card.Text> */}
                    <Button style={{backgroundColor: "white", borderColor: "white"}} onClick={e => addToCart(product)}><Cart3 size={35} color={'green'} ></Cart3></Button>
      
                    </Card.Body>
                  </Card>
                </Link>
            </div>
            
        ))}
          
      </div>
        
      
    </div>
  )
}
