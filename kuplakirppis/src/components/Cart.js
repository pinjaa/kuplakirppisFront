import React from 'react'
import { Cart3 } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

export default function Cart({cart}) {
  return (
    <Link to="/order">
        <Cart3 size={30}/>
    </Link>
  )
}
