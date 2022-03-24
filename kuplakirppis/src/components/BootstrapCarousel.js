import React from 'react'
import {Carousel} from 'react-bootstrap'
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
      <h3>Koira</h3>
      <p>Ostakaa hyvä koira tuirasta</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
    style={{marginLeft: 400,height:400}}
      src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Koira</h3>
      <p>Ostakaa hyvä koira Toppilasta.</p>
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


