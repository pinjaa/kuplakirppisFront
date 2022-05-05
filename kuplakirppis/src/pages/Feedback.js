import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Feedback() {
  const url = 'http://localhost/kuplakirppisBack/'

  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [email, setEmail] = useState("");
  const [puhelinnro, setPuhelinnro] = useState("");
  const [message, setMessage] = useState('')
  
  function send(e) {
    e.preventDefault()
    if(email == "" || etunimi == ""  || sukunimi == ""  || puhelinnro == ""){
      document.getElementById("response").innerHTML="<div class='alert alert-danger' role='alert' id='response'> Täytä kaikki tekstikentät! </div>"
    } else {
      const json = JSON.stringify({
        etunimi: etunimi,
        sukunimi: sukunimi,
        email: email,
        puhelinnro: puhelinnro
      });

      axios.post(url + "modules/feedback.php", json, {
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }
      })
      .then((response) => {
      document.getElementById("response").innerHTML="<div class='alert alert-success' role='alert' id='response'>"+ response.data +"  </div>";
      
  }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error)
  })
  
  }
    
  }
  

  return (
    <div>
        <h3>Yhteystiedot</h3>
        <form onSubmit={send}>
            <label> <input type="text" placeholder='Etunimi' name='etunimi' value={etunimi} onChange={e => setEtunimi(e.target.value)}/></label><br />
            <p></p>
            <label> <input type="text" placeholder='Sukunimi' name='sukunimi' value={sukunimi} onChange={e => setSukunimi(e.target.value)} /></label><br />
            <p></p>
            <label> <input type="text" placeholder='Sähköposti' name='email' value={email}  onChange={e => setEmail(e.target.value)}/></label><br />
            <p></p>
            <label> <input type="text" placeholder='Puhelinnumero' name='puhelinnro' value={puhelinnro}  onChange={e => setPuhelinnro(e.target.value)}/></label><br />
            <p></p>
            <label for="palaute">Anna Palautetta:</label>
            <textarea className="form-control rounded-0" id="palaute" rows="3" style={{resize: "none", maxWidth:"40vw", height:"10vw"}}></textarea><br />
            <input className='btn btn-success' type="submit" value="Lähetä" />
        </form>
        <div id="response"></div>
    </div>
  )
}
