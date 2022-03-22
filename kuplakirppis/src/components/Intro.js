import React from 'react'
import kuplalogo from '../images/kuplalogo1.0.png'

export default function Intro() {
  return (
    <div className='container intro'>
        <div className='row'>
            <div className='col'></div>
            <div className='col'>
                <img src={kuplalogo}></img>
            </div>
            <div className='col'></div>
        </div>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col introtext'>
                <p>Tervetuloa shoppailemaan kuplakirppikseen. Selaa tuotteita kategorioittain tai etsi löytöjä nimen perusteella tms tekstiä tähän...</p>
            </div>
            <div className='col-2'></div>
        </div>
    </div>
  )
}
