import React from 'react'

export default function Desk() {
  return (
    <div>
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
            <label>Varauksen alkamispäivä</label>
            <input type="date" />
            <br /><br />
            <label>Varauksen loppumispäivä</label>
            <input type="date" />
            <br /><br />
            <button type='submit' className='btn btn-primary'>Varaa pöytä</button>


        </form>
    </div>
  )
}
