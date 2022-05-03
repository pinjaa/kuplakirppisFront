import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  

  return (
    
    <div>
      <Link to="../Admin/ManageProducts">Ylläpidä tuotteita</Link> <br></br>
      <Link to="../Admin/ManageCategories">Ylläpidä tuoteryhmiä</Link><br />
	  <Link to="../admin/ManageOrders">Tarkastele tilauksia</Link><br />
      <Link to="../admin/ManageUsers">Tarkastele käyttäjätietoja</Link><br />
	
	
    </div>
  )
}
