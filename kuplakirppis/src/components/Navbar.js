import React, { useState, useEffect } from 'react'
import { Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import axios from 'axios';
import kuplalogo from '../images/kuplalogo2.0.png';

export default function Navbar({cart, url}){
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
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

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/search/' + search);
    }
  }
  
  function executeSearchIcon() {
    if(search) {
      navigate('/search/' + search);
    }
  }

  function toggleNav() {
    if (window.innerWidth <= 600) {
      document.getElementById("categoriesMobile").classList.toggle("categories-opennav-mobile");
      document.getElementById("main").classList.remove("main-opennav");
    }else {
      document.getElementById("categories").classList.toggle("categories-opennav");
      document.getElementById("main").classList.toggle("main-opennav");
    }
    
  }

    return (
      <nav className="navbar navbar-expand-sm navbar-light"
      style={{backgroundColor: '#b0ffc6', paddingLeft: '0.8em', paddingRight: '2em'}}>
      <button class="openbtn" onClick={toggleNav}>&#9776;</button>

      <div className="container searchbar-div" style={{paddingLeft: '2em'}}>
        <div className="row">
            <div className="col-md-12">
                <div className="form input-group">
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) =>executeSearch(e)}
                className="form-control mr-sm-2 searchbar"
                type="search"
                placeholder='Search'
                aria-label="Search" />
                <div className='input-group-text searchbar' onClick={executeSearchIcon}><span><Search color='#344C3B' id='search-icon'/></span></div></div>
            </div>
        </div>
      </div>

      <div class="wide-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className='nav-link' to={'../pages/Info'}>INFO</Link>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link" href="#"  id="dropdownMenuClickableOutside" role="button" data-bs-toggle="dropdown"  data-bs-auto-close="inside" aria-haspopup="true" aria-expanded="false" >
              Kirjaudu
            </a>
            <div className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuClickableOutside"
            style={{padding:30, backgroundColor: '#b0ffc6' }}>

              <Login>
              </Login>
          <br />
      <a href='../pages/Register'> <button className='btn btn-success'>Rekisteröidy</button></a>
      <div class="alert alert-danger" role="alert" id='erroralert'>
       Kirjautuminen ei onnistu!
      </div>
            </div>
          </li>
          <li className='nav-item' style={{marginLeft: '2em'}}>
            <Cart cart={cart} />
          </li>
          
        </ul>
        
      </div>

      <div id='categoriesMobile' className='categories-mobile sidebar-div d-flex flex-column flex-shrink-0 container' >
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
          <div className='col sidebar'>
            <img src={kuplalogo} alt="" style={{paddingBottom: '0.5em', width:'150px'}} />
            <Link to="/" style={{display:'block', backgroundColor: '#e0ffe9', paddingLeft: '2em', paddingRight: '2em'}}>Etusivu</Link>
            <span style={{color: '#2F4F38'}}>Tervetuloa shoppailemaan</span>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link style={{display:'block', backgroundColor: '#e0ffe9', paddingLeft: '2em', paddingRight: '2em'}} className='nav-link' to={'../pages/Info'}>INFO</Link>
            </li>
            <li className="nav-item dropdown">
            <a style={{backgroundColor: '#e0ffe9', paddingLeft: '2em', paddingRight: '2em'}} className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kirjaudu
              </a>
              <div className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdown"
              style={{backgroundColor: '#b0ffc6' }}>
                <Login></Login>
            <br/>
            <a href='../pages/Register'> <button className='btn btn-success'>Rekisteröidy</button></a>
      
              </div>
            </li>
        </ul>
        </div>
      </div>
    </div>
    </nav>
    )
}