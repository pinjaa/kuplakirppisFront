import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export default function Register({url}) {
  
    useEffect(() => {
        axios.get(url + 'modules/register.php/')
        .then((response) => {
            const json = response.data;
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
      }, [])

      function empty(e){
        if(document.getElementById("etunimi").value==""||document.getElementById("sukunimi").value==""||document.getElementById("email").value==""||document.getElementById("salasana").value==""){
         // alert("et voi asettaa tyhjiä arvoja")
          document.getElementById("registerError").innerHTML="<div class='alert alert-danger' role='alert' id='erroralert'> Et voi asettaa tyhjiä arvoja! </div>"
          e.preventDefault()
        }
      }

  return (
      <div>
      <h1>Rekisteröidy</h1>
    
    <form action="http://localhost/kuplakirppisBack/modules/register.php" method='post' onSubmit={empty}>
    
    <input type="text" placeholder='Etunimi' name='etunimi' id='etunimi'/> <br /> <br />
    
    <input type="text" name='sukunimi' placeholder='Sukunimi' id='sukunimi'/> <br /><br />
    
    <input type="email" name='email' placeholder='Sähköpostiosoite' id='email' /> <br /><br />
   
    <input type="password" name='salasana' placeholder='Salasana' id='salasana'/> <br /><br />
    <button type='submit' className='btn btn-primary'>Rekisteröidy</button>
    </form> <br />
    <div id='registerError'></div>
    </div>
  )
}
