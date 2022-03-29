import React, {useState,useEffect} from 'react'
import axios from 'axios'
import kuplalogo from '../images/kuplalogo1.0.png'
import {Link} from 'react-router-dom'
import Vaatteet from '../pages/Vaatteet'
import Elektroniikka from '../pages/Elektroniikka'
import Ajoneuvot from '../pages/Ajoneuvot'
import Hifi from '../pages/Hifi'
import Keittio from '../pages/Keittio'
import Koti from '../pages/Koti'
import VapaaAika from '../pages/VapaaAika'
import Tuote from '../pages/Tuote'
import Products from '../pages/Products'

export default function Categories({url}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      console.log(url);
      axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            setCategories(json);
            console.log(json)
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, []); 
    

  return (
    <div id='categories' className='d-flex flex-column flex-shrink-0 container'style={{height:'100'}} >
      <div className='row'>
        <div className='col sidebar'>
          <img src={kuplalogo} alt="" />
          <Link to="/">Etusivu</Link><br/>
          <span>Tervetuloa shoppailemaan</span>
        </div>
      </div>
      <div className='row'>
        <div className='col sidebar'>
          <ul>
           {categories.map(category => (
              <li key={category.ktg_nro}>
                <Link to={'/products/' + category.ktg_nro}>
                  {category.ktg_nimi}
                  
                </Link>
              </li>
           ))}
           <a href="">Pöytävaraukset</a>
          </ul>
        </div>
      </div>
    </div>
  )
}

