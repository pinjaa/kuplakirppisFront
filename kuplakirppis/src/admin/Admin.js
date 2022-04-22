import React from 'react'

export default function Admin() {

  return (
    <div>
      <div class="header">
		<h2>Admin - create user</h2>
	</div>
	
	<form method="post" action="http://localhost/kuplakirppisBack/modules/register.php">

    <div class="input-group">
			<label>Etunimi</label>
			<input type="text" name="email"/>
		</div>
    <div class="input-group">
			<label>Sukunimi</label>
			<input type="text" name="email"/>
		</div>
		<div class="input-group">
			<label>Email</label>
			<input type="email" name="email"/>
		</div>
		<div class="input-group">
			<label>Käyttäjätyyppi</label>
			<select name="user_type" id="user_type" >
				<option value="admin">Admin</option>
				<option value="user">Asiakas</option>
			</select>
		</div>
		<div class="input-group">
			<label>Salasana</label>
			<input type="password" name="password"/>
		</div>
		<div class="input-group">
			<button type="submit" class="btn btn-dark" name="register_btn"> + Create user</button>
		</div>
	</form>
    </div>
  )
}
