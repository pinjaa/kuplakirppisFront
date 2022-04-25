import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';


/*function login(e) {
  
    console.log('koira');
  }*/
  

export default function Login() {

   /* useEffect(() => {
        axios.get(url + 'modules/login.php/')
        .then((response) => {
            const json = response.data;
            console.log(response.data);
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
      }, []) */
      
      function empty(e){
        if(document.getElementById("login_email").value==""|| document.getElementById("login_salasana").value==""){
          document.getElementById("erroralert").innerHTML="<div class='alert alert-danger' role='alert' id='erroralert'>Et voi asettaa tyhjiä arvoja</div>"
          //alert("kirjautuminen ei onnistu")
          e.preventDefault()
        }else{
            axios.get('http://localhost/kuplakirppisBack/modules/login.php')
          .then((response) => {
              const json = response.data;
              document.getElementById("erroralert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+response.data +"  </div>"
          }).catch(error => {
              alert(error.response === undefined ? error : error.response.data.error)
          })
          }
        }
        
      
     
  return (
  
   <form 
   action='http://localhost/kuplakirppisBack/modules/login.php' method='post' 
   onSubmit={empty}>
        <label><h6>Kirjaudu sisään.</h6></label>

         <input type="email" name="email" id="login_email" placeholder='sähköpostiosoite'  /> 
         <p></p>
        <input type="password" name="salasana" id='login_salasana' placeholder='salasana'  />
        <p></p>

        <button type='submit' className='btn btn-success'>Kirjaudu sisään</button>
        <div id="erroralert"></div>
      
      </form> 

      
  )
}
