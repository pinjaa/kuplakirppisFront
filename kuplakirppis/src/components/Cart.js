import React from 'react'
import { Cart3 } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

export default function Cart({cart}) {
  return (
    <Link to="/order">
        <Cart3 size={30} class="position-relative"/>
        <span 
        class="position-absolute bottom-0 translate-middle badge rounded-pill"
        style={{backgroundColor: '#A05EF0', color: 'black'}}>
        {cart.length}
        </span>
    </Link>
  )
}
