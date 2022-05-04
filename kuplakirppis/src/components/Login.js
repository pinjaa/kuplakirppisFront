import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Display } from 'react-bootstrap-icons';

export default function Login({setIsAdmin}) {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
      
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
              document.getElementById("erroralert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ response.data["msg"] +"  </div>";

              if(response.data["success"]) {
                document.getElementById("loginForm").style=" display : none"
                document.getElementById("logOutForm").style=" display : block"
                document.getElementById("dropdownMenuClickableInside").innerHTML = "Kirjaudu ulos"
              }

              if(response.data["isAdmin"]) {
                document.getElementById("adminLink").style = "display : block";
                setIsAdmin(true);
              }
              
          }).catch(error => {
              alert(error.response === undefined ? error : error.response.data.error)
          })
          
          }
         
        } 
        
      function logout(e){
        e.preventDefault();
        
      
          const json = JSON.stringify({
            email: email,
          });

          axios.post("http://localhost/kuplakirppisBack/modules/login.php", json, {
            headers: {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then((response) => {
            document.getElementById("erroralert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ response.data["msg"] +"  </div>";
           document.getElementById("loginForm").style=" display : block"
           document.getElementById("logOutForm").style=" display : none"  
           document.getElementById("adminLink").style = "display : none";
           setIsAdmin(false);
        })
       
      } 
     
  return (
   <form onSubmit={empty} >
     <div id='loginForm'>
        <label><h6>Kirjaudu sisään.</h6></label>

         <input type="email" name="email" id="login_email" placeholder='sähköpostiosoite' value={email} onChange={e => setEmail(e.target.value)}/> 
         <p></p>
        <input type="password" name="salasana" id='login_salasana' placeholder='salasana' value={pword} onChange={e => setPword(e.target.value)}/>
        <p></p>

        <button type='submit' className='btn btn-success'>Kirjaudu sisään</button>
  
        </div>
    <div id="erroralert"></div>
        <div id="logOutForm" style={{display : 'none'}}>
        <form id='logOut'  onSubmit={logout}>
        <button type='submit' className='btn btn-danger'  value={email} onChange={ e => setEmail(e.target.value)}> Kirjaudu ulos</button>
        </form>
        </div>
      </form> 
      
  )
}
