import React from 'react'

export default function Feedback() {
  return (
    <div>
        <h3>Tilauslomake</h3>
        <form action="http://localhost/kuplakirppisBack/modules/feedback.php" id="palautelomake" method='post'>
            <label>Etunimi <input type="text" name='etunimi'/></label><br />
            <label>Sukunimi <input type="text" name='sukunimi' /></label><br />
            <label>Osoite <input type="text" name='osoite' /></label><br />
            <label>Postinumero <input type="text" name='postinro' /></label><br />
            <label>Postitoimipaikka <input type="text" name='postitmp' /></label><br />
            <label>Sähköposti <input type="text" name='email' /></label><br />
            <label>Puhelinnumero <input type="text" name='puhelinnro' /></label><br />
            <input className='btn btn-success' type="submit" value="Tilaa tuotteet" />
        </form>
    </div>
  )
}
