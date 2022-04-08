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
      axios.get(url + 'Products/getproducts.php/' + params.categoryId)
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
            
        
        
        {products.map(product => (
            <div className='col' key={product.id} >
                <Link to="/" style={{float:"left"}}>Etusivu</Link>
        <Container >
            <Row style={{padding:"10px",border:"solid 10px #b0ffc6",marginLeft:"auto",marginRight:"auto",marginTop:"10%",borderRadius:"10px" }}>
               
                <Col style={{textAlign:"center"}}>  
                
                <img src={product.image}/>
                <p style={{paddingTop:"5px"}}>{product.kuvaus}</p>
                
                </Col>
                
                <Col>
                <h2 style={{color:"green"}}>{product.tuotenimi}</h2>
                
                <h3>{product.hinta}€</h3>
                <h3>Tuira, Oulu</h3>
                <button className='btn btn-primary' style={{marginTop:"10px",backgroundColor:"purple"}} onClick={e => addToCart(product)}><Cart3 size={25} color={'white'}></Cart3> Lisää ostoskoriin</button>
                </Col>
            
            </Row>
        </Container>
                 
            </div>
            
        ))}
          
      </div>
        
      
    </div>
  )
}
//style={{marginLeft:"auto",marginRight:"auto",display:"block",}}