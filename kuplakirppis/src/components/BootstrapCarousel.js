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
      style={{marginLeft: 400,height:400}}
      src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
      alt="koira"
    />
    <Carousel.Caption>
      <h3>Kuplakirppis</h3>
      <p>Tutustu laajaan tuotevalikoimaamme</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
    style={{marginLeft: 400,height:400}}
      src={kuplalogo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Myy tuotteitasi verkkosivuillamme!</h3>
      <p>Tulossa pian...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{marginLeft: 400,height:400}}
      src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Koira</h3>
      <p>Ostakaa hyvä koira Rajakylästä</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}


