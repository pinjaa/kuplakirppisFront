import React, {useState,useEffect} from 'react'
import axios from 'axios'
import kuplalogo from '../images/kuplalogo2.0.png'
import {Link} from 'react-router-dom'

export default function Categories({url}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            setCategories(json);
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, []); 
    

  return (
    <div id='categories' className='d-flex flex-column flex-shrink-0 container'style={{height:'100', position:'fixed', width: '16vw'}} >
      <div className='row'>
        <div className='col sidebar'>
          <img src={kuplalogo} alt="" style={{paddingBottom: '0.5em'}} />
          <Link to="/">Etusivu</Link><br/>
          <span style={{color: '#2F4F38'}}>Tervetuloa shoppailemaan</span>
        </div>
      </div>
      <div className='row'>
        <div className='col sidebar'>
          <ul>
           {categories.map(category => (
              <li key={category.ktg_nro} className='category-link'>
                <Link to={'/products/' + category.ktg_nro}>
                  {category.ktg_nimi}
                  
                </Link>
              </li>
           ))}
           <hr />
           <li href="" className='category-link'>Pöytävaraukset</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

