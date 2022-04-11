import React from 'react'
import { Cart3 } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

export default function Cart({cart}) {
  return (
    <Link to="/order">
        <Cart3 size={30} className="position-relative"/>
        <span 
        className="position-absolute bottom-0 translate-middle badge rounded-pill" 
        style={{backgroundColor: '#A05EF0'}}>
        {cart.length}
        </span>
    </Link>
  )
}
