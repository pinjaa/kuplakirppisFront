import React from 'react'
import kuplalogo from '../images/kuplalogo1.0.png'
import {Link} from 'react-router-dom'
import Vaatteet from '../pages/Vaatteet'
import Elektroniikka from '../pages/Elektroniikka'
import Ajoneuvot from '../pages/Ajoneuvot'
import Hifi from '../pages/Hifi'
import Keittiö from '../pages/Keittiö'
import Koti from '../pages/Koti'
import VapaaAika from '../pages/VapaaAika'

export default function Categories() {
  return (
    <div id='categories' className='d-flex flex-column flex-shrink-0 container'>
      <div className='row'>
        <div className='col sidebar'>
          <img src={kuplalogo} alt="" />
          <Link to="/">Etusivu</Link><br/>
          <span>Tervetuloa shoppailemaan</span>
        </div>
      </div>
      <div className='row'>
        <div className='col sidebar'>
          <ul>
            <li><Link to ="../Vaatteet">Vaatteet</Link> </li>
            <li><Link to ="../Elektroniikka">Elektroniikka ja Kodinkoneet</Link> </li>
            <li><Link to ="../Ajoneuvot">Ajoneuvot</Link> </li>
            <li><Link to ="../Hifi">Hifi</Link> </li>
            <li><Link to ="../Keittiö">Keittiö</Link> </li>
            <li><Link to ="../Koti">Koti</Link> </li>
            <li><Link to ="../VapaaAika">Vapaa-aika</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

