import React from 'react'

export default function Desk() {

  function deskcheck(e){
    if(document.getElementById("deskfname").value==""||document.getElementById("desklname").value==""||document.getElementById("deskemail").value==""||document.getElementById("deskweek").value==""||document.getElementById("deskweeks").value==""){
      document.getElementById("deskerror").innerHTML="<div class='alert alert-danger' role='alert' id='erroralert'> Et voi asettaa tyhjiä arvoja! </div>"
      e.preventDefault();
    }
  }
  return (
    <div className='row'>
      <div className='col'>
        <h2>Pöytävaraukset</h2>
        <form onSubmit={deskcheck}>
            <label>Etunimi </label>
            <input type="text" id='deskfname'/>
            <br /><br />
            <label>Sukunimi </label>
            <input type="text" id='desklname'/>
            <br /><br />
            <label>Sähköpostiosoite </label>
            <input type="email" id='deskemail' />
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
            <input type="week" id='deskweek' />
            <br /><br />
            <label>Viikkojen määrä</label>
            <input type="number" id='deskweeks' />
            <br /><br />
            <button type='submit' className='btn btn-primary'>Varaa pöytä</button>
            <br /> <br />
            <div id='deskerror'></div>
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
