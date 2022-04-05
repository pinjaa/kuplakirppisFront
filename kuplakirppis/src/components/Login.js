import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';


function login(e) {
    console.log('koira');
  }

export default function LoginForm({url}) {

    useEffect(() => {
        axios.get(url + 'modules/login.php/')
        .then((response) => {
            const json = response.data;
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
      }, [])
  return (
   
   <form action='http://localhost/kuplakirppisBack/modules/login.php' method='post'>
        <label><h6>Kirjaudu sisään.</h6></label>

         <input type="email" name="email" id="login_email" placeholder='sähköpostiosoite' /> 
         <p></p>
        <input type="password" name="salasana" id='login_salasana' placeholder='salasana' />
        <p></p>

        <button type='submit' className='btn btn-success'>Kirjaudu sisään</button>

      </form> 
  
  )
}
