import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

export default function UpdateProduct({url}) {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(0)
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

    async function updateProduct(e) {
      e.preventDefault();
      const json = JSON.stringify({name: name, price: price, description: description});
      console.log(json);
      await axios.post(url + 'products/updateProducts.php/' + params.categoryId + '/' + params.productId, json,{
          headers: {  
              'Content-Type' : 'application/json'
          }
      })
      .then((response) => {
        const json = response.data
        console.log(json);
          document.getElementById("alert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ json.alert +"  </div>"
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
                <h3>Muokkaa tuotteen tietoja</h3>
                <label>Tuotenimi: </label>
                <input type="text" name='name' placeholder={product.tuotenimi} onChange={e => setName(e.target.value)}/><br />
                <label>Hinta: </label>
                <input type="text" name='price' placeholder={product.hinta} onChange={e => setPrice(e.target.value)}/><br />
                <label>Kuvaus: </label>
                <input type="text" name='description' style={{'width':"30em",'height':"4em"}} placeholder={product.kuvaus} onChange={e => setDescription(e.target.value)}/><br />
                <button>Tallenna muutokset</button>
            </div>
            
        ))}
        <div id='alert'></div>
        </form>
          
      </div>
        
      
    </div>
  )
}