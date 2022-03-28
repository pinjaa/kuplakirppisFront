import React from 'react'
import {Carousel} from 'react-bootstrap'
import kuplalogo from '../images/kuplalogo1.0.png'
export default function BootstrapCarousel() {
  return (
    <div>
        <Carousel variant='dark'>
  <Carousel.Item>
    <img
      className="d-block"
      style={{marginLeft: 275,height:400}}
      src={kuplalogo}
      alt="koira"
    />
    <Carousel.Caption>
      <h3>Tervetuloa myymäläämme!</h3>
      <p>Kirppiskatu 3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
    style={{marginLeft: 275,height:400}}
      src={kuplalogo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Pöytävaraukset netistä!</h3>
      <p>Hinnat alkaen 15€ viikko</p>
    </Carousel.Caption>
  </Carousel.Item>
{/*   <Carousel.Item>
    <img
      className="d-block"
      style={{borderRadius:25, marginLeft: 375,height:400}}
      src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p>Hinnat alkaen 15€ viikko</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
    </div>
  )
}


