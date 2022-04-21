import React, { useState } from 'react'


export default function Feedback() {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [email, setEmail] = useState("");
  const [puhelinnro, setPuhelinnro] = useState("");

  return (
    <div>
        <h3>Yhteystiedot</h3>
        <form action="http://localhost/kuplakirppisBack/modules/feedback.php" id="palautelomake" method='post'>
            <label> <input type="text" placeholder='Etunimi' name='etunimi' onChange={e => setEtunimi(e.target.value)}/></label><br />
            <p></p>
            <label> <input type="text" placeholder='Sukunimi' name='sukunimi' onChange={e => setSukunimi(e.target.value)} /></label><br />
            <p></p>
            <label> <input type="text" placeholder='Sähköposti' name='email'  onChange={e => setEmail(e.target.value)}/></label><br />
            <p></p>
            <label> <input type="text" placeholder='Puhelinnumero' name='puhelinnro'  onChange={e => setPuhelinnro(e.target.value)}/></label><br />
            <p></p>
            <label for="palaute">Anna Palautetta:</label>
            <textarea className="form-control rounded-0" id="palaute" rows="3" style={{resize: "none", maxWidth:"40vw", height:"10vw"}}></textarea><br />
            <input className='btn btn-success' type="submit" value="Lähetä" />
        </form>
    </div>
  )
}
