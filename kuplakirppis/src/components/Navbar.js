import React from 'react'
import { Search } from 'react-bootstrap-icons';

export default function Navbar(){
    return (
      <nav class="navbar navbar-expand-sm navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="form"> <input type="text" class="form-control form-input" placeholder="Etsi löytöjä..."></input><span><Search color='#8ceda7' id='search-icon'/></span></div>
            </div>
        </div>
      </div>
      
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">INFO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">KIRJAUDU</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              OSTOSKORI
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          
        </ul>
        
      </div>
    </nav>
    )
}