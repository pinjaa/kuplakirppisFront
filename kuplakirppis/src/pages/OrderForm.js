import React from 'react'

export default function OrderForm() {
  return (
    <div>
        <h3>Tilauslomake</h3>
        <form action="" id="tilauslomake">
            <label>Etunimi <input type="text" /></label><br />
            <label>Sukunimi <input type="text" /></label><br />
            <label>Osoite <input type="text" /></label><br />
            <label>Postinumero <input type="text" /></label><br />
            <label>Postitoimipaikka <input type="text" /></label><br />
            <label>Sähköposti <input type="text" /></label><br />
            <label>Puhelinnumero <input type="text" /></label><br />
            <input className='btn btn-success' type="submit" value="Tilaa tuotteet" />
        </form>
    </div>
  )
}
