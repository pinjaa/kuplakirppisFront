import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
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
          e.preventDefault();
          if(email == "" || pword == ""){
           // alert("et voi asettaa tyhjiä arvoja")
            document.getElementById("erroralert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'> Et voi asettaa tyhjiä arvoja! </div>"
          } else {
            const json = JSON.stringify({
              email: email,
              pword: pword
            });
  
            axios.post("http://localhost/kuplakirppisBack/modules/login.php", json, {
              headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
              }
            })
            .then((response) => {
              document.getElementById("erroralert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ response.data +"  </div>"
          }).catch(error => {
              alert(error.response === undefined ? error : error.response.data.error)
          })
          
          }
          
        } 
        
      
     
  return (
   <form onSubmit={empty}>
        <label><h6>Kirjaudu sisään.</h6></label>

         <input type="email" name="email" id="login_email" placeholder='sähköpostiosoite' value={email} onChange={e => setEmail(e.target.value)}/> 
         <p></p>
        <input type="password" name="salasana" id='login_salasana' placeholder='salasana' value={pword} onChange={e => setPword(e.target.value)}/>
        <p></p>

        <button type='submit' className='btn btn-success'>Kirjaudu sisään</button>
        <div id="erroralert"></div>
      </form> 
      
  )
}
