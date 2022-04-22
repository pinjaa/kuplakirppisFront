import React from 'react'

export default function Desk() {
  return (
    <div className='row'>
      <div className='col'>
        <h2>Pöytävaraukset</h2>
        <form>
            <label>Etunimi </label>
            <input type="text" />
            <br /><br />
            <label>Sukunimi </label>
            <input type="text" />
            <br /><br />
            <label>Sähköpostiosoite </label>
            <input type="email" />
            <br /><br />
            <label>Pöydän koko:</label>
            <select name="" id="">
                <option value="">Pieni</option>
                <option value="">Keskikoko</option>
                <option value="">Iso</option>
                <option value="">Valtava</option>
            </select>
            <br /> <br />
            <label>Varauksen alkamisviikko</label>
            <input type="week" />
            <br /><br />
            <label>Viikkojen määrä</label>
            <input type="number" />
            <br /><br />
            <button type='submit' className='btn btn-primary'>Varaa pöytä</button>
        </form>
        </div>
        <div className='col'>
        <h2>
          Pöytien hinnat
        </h2>
        <li>
          Pieni - 15€/viikko
        </li>
        <li>
          Keskikoko - 20€/viikko
        </li>
        <li>
          Iso - 25€/viikko
        </li>
        <li>
          Valtava - 30€/viikko
        </li>
        </div>
    </div>
  )
}
