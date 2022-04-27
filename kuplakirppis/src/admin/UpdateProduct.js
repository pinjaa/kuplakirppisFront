import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons';

export default function UpdateProduct({url}) {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)

    let params = useParams();

    useEffect(() => {
      axios.get(url + 'products/getproduct.php/' + params.categoryId + '/' + params.productId)
      .then((response) => {
          const json = response.data;
          setProducts(json.product);
      }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
      })
    }, [params])

    function updateProduct(e) {
      e.preventDefault();
      const json = JSON.stringify({name: name, price: price, description: description});
      axios.post(url + 'products/updateProducts.php/' + params.categoryId + '/' + params.productId, json,{
          headers: {
              'Content-Type' : 'application/json'
          }
      })
      .then((response) => {
        const json = response.data
          setName(json.tuotenimi)
          setPrice(json.hinta)
          setDescription(json.kuvaus)
      }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error);
      });
  }
    

  return (
    <div className='container-fluid'>
      
      <div className='row align-items-baseline'>
            
        
        <form onSubmit={updateProduct}>
        {products.map(product => (

            <div className='col' key={product.id} >
                <Link to="../admin/ManageProducts" style={{float:"left"}}>Takaisin</Link><br />
                <label>Tuotenimi: </label>
                <input type="text" name='name' defaultValue={product.tuotenimi} onChange={e => setName(e.target.value)}/><br />
                <label>Hinta: </label>
                <input type="text" name='price' defaultValue={product.hinta} onChange={e => setPrice(e.target.value)}/><br />
                <label>Kuvaus: </label>
                <input type="text" name='description' style={{'width':"30em",'height':"4em"}} defaultValue={product.kuvaus} onChange={e => setDescription(e.target.value)}/><br />
                <button>Tallenna muutokset</button>
                 
            </div>
            
        ))}
        </form>
          
      </div>
        
      
    </div>
  )
}