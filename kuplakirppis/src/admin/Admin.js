import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  

  return (
    
    <div>
      <Link to="../Admin/ManageProducts">Ylläpidä tuotteita</Link> <br></br>
      <Link to="../Admin/ManageCategories">Ylläpidä tuoteryhmiä</Link>
      <div class="header">
		<h2>Admin - create user</h2>
	</div>
	
	<form method="post" action="http://localhost/kuplakirppisBack/modules/register.php">

    <div class="input-group">
			<label>Etunimi</label>
			<input type="text" name="etunimi"/>
		</div>
    <div class="input-group">
			<label>Sukunimi</label>
			<input type="text" name="sukunimi"/>
		</div>
		<div class="input-group">
			<label>Email</label>
			<input type="email" name="email"/>
		</div>
		<div class="input-group">
			<label>Käyttäjätyyppi</label>
			<select name="user_type" id="user_type" >
				<option value="K">Admin</option>
				<option value="E">Asiakas</option>
			</select>
		</div>
		<div class="input-group">
			<label>Salasana</label>
			<input type="password" name="salasana"/>
		</div>
		<div class="input-group">
			<button type="submit" class="btn btn-dark" name="register_btn"> + Create user</button>
		</div>
	</form>
    </div>
  )
}
