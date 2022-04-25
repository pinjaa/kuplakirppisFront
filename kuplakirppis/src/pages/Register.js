import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Register() {

      const [fname, setFname] = useState("");
      const [lname, setLname] = useState("");
      const [email, setEmail] = useState("");
      const [pword, setPword] = useState("");
   /* useEffect(() => {
        axios.get(url + 'modules/register.php/')
        .then((response) => {
            const json = response.data;
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
      }, [])*/

      
       function empty(e){
        if(document.getElementById("etunimi").value==""||document.getElementById("sukunimi").value==""||document.getElementById("email").value==""||document.getElementById("salasana").value==""){
         // alert("et voi asettaa tyhjiä arvoja")
          document.getElementById("registerError").innerHTML="<div class='alert alert-danger' role='alert' id='erroralert'> Et voi asettaa tyhjiä arvoja! </div>"
        } else {

          const json = JSON.stringify({
            fname: fname,
            lname: lname,
            email: email,
            pword: pword,
            user: null
          });

          axios.post("http://localhost/kuplakirppisBack/modules/register.php", json, {
            headers: {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
          })
          .then((response) => {
            const json = response.data;
            console.log(json)
            document.getElementById("errorAlert").innerHTML="<div class='alert alert-success' role='alert' id='erroralert'>"+ json +"  </div>"
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
        }

        e.preventDefault();
      } 

  return (
      <div>
      <h1>Rekisteröidy</h1>
    
    <form onSubmit={empty} >
    
    <input type="text" placeholder='Etunimi' name='etunimi' id='etunimi' value={fname} onChange={e => setFname(e.target.value)}/> <br /> <br />
    
    <input type="text" name='sukunimi' placeholder='Sukunimi' id='sukunimi' value={lname} onChange={e => setLname(e.target.value)}/> <br /><br />
    
    <input type="email" name='email' placeholder='Sähköpostiosoite' id='email' value={email} onChange={e => setEmail(e.target.value)}/> <br /><br />
   
    <input type="password" name='salasana' placeholder='Salasana' id='salasana' value={pword} onChange={e => setPword(e.target.value)}/> <br /><br />
    <button type='submit' className='btn btn-primary'>Rekisteröidy</button>
    </form> <br />
    <div id='registerError'></div>
    <div id='errorAlert'></div>
    </div>
  )
}
