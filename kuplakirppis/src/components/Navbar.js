import React from 'react'
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';


export default function Navbar({cart}){
    return (
      <nav className="navbar navbar-expand-sm navbar-light"
      style={{backgroundColor: '#b0ffc6', paddingLeft: '2em', paddingRight: '2em'}}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="form input-group"> <input type="text" className="form-control form-input" placeholder="Etsi löytöjä..."></input><div className='input-group-text'><span><Search color='#8ceda7' id='search-icon'/></span></div></div>
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