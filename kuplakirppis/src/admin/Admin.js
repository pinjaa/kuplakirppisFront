import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin({isAdmin}) {
  
  if(isAdmin) {
    return (
    
      <div>
        <Link to="../Admin/ManageProducts">Ylläpidä tuotteita</Link> <br></br>
        <Link to="../Admin/ManageCategories">Ylläpidä tuoteryhmiä</Link><br />
      <Link to="../admin/ManageOrders">Tarkastele tilauksia</Link><br />
        <Link to="../admin/ManageUsers">Tarkastele käyttäjätietoja</Link><br />
    
    
      </div>
    )
  }else {
    return (
      <div>
          <h1>Ei oikeuksia</h1>
          <Link to="/">Palaa etusivulle</Link>
      </div>
    )
  }
}
