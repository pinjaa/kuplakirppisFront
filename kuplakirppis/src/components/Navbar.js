import React from 'react'
import { Search } from 'react-bootstrap-icons';
import Cart from './Cart';

function login(e) {
  console.log('koira');
}
export default function Navbar(){
    return (
      <nav class="navbar navbar-expand-sm navbar-light"
      style={{backgroundColor: '#b0ffc6'}}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="container"
      style={{marginLeft: 500}}>
        <div class="row">
            <div class="col-md-12">
                <div class="form input-group"> <input type="text" class="form-control form-input" placeholder="Etsi löytöjä..."></input><div className='input-group-text'><span><Search color='#8ceda7' id='search-icon'/></span></div></div>
            </div>
        </div>
      </div>

      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">INFO</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kirjaudu
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"
            style={{padding:30, backgroundColor: '#b0ffc6' }}>
          <form onSubmit={login}>
        <label>Kirjaudu sisään.</label>



         <input type="{email}" name='email' placeholder='sähköpostiosoite' /> 
         <p></p>
        <input type="{password}" name='password' placeholder='salasana' />
<p></p>
        <button className='btn btn-primary'>Kirjaudu sisään</button>

        
      </form>  
            </div>
          </li>
          <li className='nav-item'>
            <Cart cart={cart} />
          </li>
          
        </ul>
        
      </div>
    </nav>
    )
}