import React from 'react'
import kuplalogo from '../images/kuplalogo1.0.png'
import {Link} from 'react-router-dom'
import Vaatteet from '../pages/Vaatteet'

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
            <a href="#"><li>Elektroniikka ja kodinkoneet</li></a>
            <a href="#"><li>Vapaa-aika</li></a>
            <a href="#"><li>Keittiö</li></a>
            <a href="#"><li>Hifi</li></a>
            <a href="#"><li>Koti ja asuminen</li></a>
            <a href="#"><li>Ajoneuvot</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

