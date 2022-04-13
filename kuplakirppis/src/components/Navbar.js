import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';


export default function Navbar({cart}){
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/search/' + search);
    }
  }

  function openNav() {
    document.getElementById("categories").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

    return (
      <nav className="navbar navbar-expand-sm navbar-light"
      style={{backgroundColor: '#b0ffc6', paddingLeft: '0.8em', paddingRight: '2em'}}>
      <button class="openbtn" onClick={openNav}>&#9776;</button>

      <div className="container" style={{paddingLeft: '2em'}}>
        <div className="row">
            <div className="col-md-12">
                <div className="form input-group">
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) =>executeSearch(e)}
                className="form-control mr-sm-2"
                type="search"
                placeholder='Search'
                aria-label="Search" />
                <div className='input-group-text'><span><Search color='#8ceda7' id='search-icon'/></span></div></div>
            </div>
        </div>
      </div>

      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className='nav-link' to={'../pages/Info'}>INFO</Link>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kirjaudu
            </a>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"
            style={{padding:30, backgroundColor: '#b0ffc6' }}>

              <Login></Login>
          <br />
      <a href='../pages/Register'> <button className='btn btn-success'>Rekisteröidy</button></a>
     
            </div>
          </li>
          <li className='nav-item' style={{marginLeft: '2em'}}>
            <Cart cart={cart} />
          </li>
          
        </ul>
        
      </div>
    </nav>
    )
}