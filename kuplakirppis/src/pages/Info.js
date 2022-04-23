import React from 'react'
import { Link } from 'react-router-dom'
import Feedback from './Feedback'

export default function Info() {
  return (
    <div>
        <div style={{paddingBottom:"10px"}}>
            <h3>Yhteystiedot</h3>
            <p>Osoite: Kuplakatu 1</p>
            <p>Puhelinnumero: 1234567890</p>
            <p>Sähköposti: kuplakirppis@gmail.com</p>
        </div>
        <div>
            <h3>Aukioloajat</h3>
            <p>Kuplakirppis palvelee arkena ja viikonloppuisin.</p>
            <h5>Maanantaista perjantaihin</h5>
            <ul>
                <li style={{listStyleType:'none'}}>10-18</li>
            </ul>
            <h5>Lauantaina ja sunnuntaina</h5>
            <ul>
                <li style={{listStyleType:'none'}}>12-18</li>
            </ul>
        </div>
        <div>
            <Link to={"../pages/Feedback"}><input type="button" value="Anna palautetta" className='btn btn-primary' /></Link>
        </div>

    </div>
  )
}
