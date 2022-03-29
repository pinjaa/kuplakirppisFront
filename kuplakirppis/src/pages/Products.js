import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';

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
        <div className='category-div col-2'>
          <Categories />
        </div>
        <div className='col'>
          <Navbar />  
        
          <h3>{categoryName}</h3>
        {products.map(product => (
            <div key={product.id}>
                {product.tuotenimi}
            </div>
        ))}
          
        </div>
        <Footer/>
      </div>
    </div>
  )
}
