import React from 'react'

export default function OrderForm() {
  return (
    <div>
      <h3>Tilauslomake</h3>
      <form action="http://localhost/kuplakirppisBack/modules/order.php" id="tilauslomake" method='post'>
        <input type="text" placeholder='Etunimi' name='etunimi' /><br />
      <p></p>
        <input type="text" placeholder='Sukunimi' name='sukunimi' /><br />
        <p></p>
        <input type="text" placeholder='Osote' name='osoite' /><br />
        <p></p>
        <input type="text" placeholder='Postinumero' name='postinro' /><br />
        <p></p>
        <input type="text" placeholder='Postitoimipaikka' name='postitmp' /><br />
        <p></p>
        <input type="text" placeholder='Sähköpostiosoite' name='email' /><br />
        <p></p>
        <input type="text" placeholder='Puhelinnumero' name='puhelinnro' /><br />
        <p></p>
        <input className='btn btn-success' type="submit" value="Tilaa tuotteet" />
      </form>
    </div>
  )
}
