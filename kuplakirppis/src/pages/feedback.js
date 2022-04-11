import React from 'react'

export default function Feedback() {
  return (
    <div>
        <h3>Yhteystiedot</h3>
        <form action="http://localhost/kuplakirppisBack/modules/feedback.php" id="palautelomake" method='post'>
            <label> <input type="text" placeholder='Etunimi' name='etunimi'/></label><br />
            <p></p>
            <label> <input type="text" placeholder='Sukunimi' name='sukunimi' /></label><br />
            <p></p>
            <label> <input type="text" placeholder='Sähköposti' name='email' /></label><br />
            <p></p>
            <label> <input type="text" placeholder='Puhelinnumero' name='puhelinnro' /></label><br />
            <p></p>
            <label for="palaute">Anna Palautetta:</label>
            <textarea class="form-control rounded-0" id="palaute" rows="3" style={{resize: "none"}}></textarea><br />
            <input className='btn btn-success' type="submit" value="Lähetä" />
        </form>
    </div>
  )
}
