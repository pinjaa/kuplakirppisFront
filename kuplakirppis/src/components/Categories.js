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
          <span>Tervetuloa shoppailemaan</span>
        </div>
      </div>
      <div className='row'>
        <div className='col sidebar'>
          <ul>
            <li><Link to ="../pages/Vaatteet">Vaatteet</Link> </li>
            <li><Link to ="../pages/Elektroniikka">Elektroniikka ja Kodinkoneet</Link> </li>
            <li><Link to ="../pages/Ajoneuvot">Ajoneuvot</Link> </li>
            <li><Link to ="../pages/Hifi">Hifi</Link> </li>
            <li><Link to ="../pages/Keittiö">Keittiö</Link> </li>
            <li><Link to ="../pages/Koti">Koti</Link> </li>
            <li><Link to ="../pages/VapaaAika">Vapaa-aika</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

