import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../../assets/images/tof9.jpg'
import img2 from '../../assets/images/tof10.jpg'
import img3 from '../../assets/images/tof21.jpg'

function SlideB() {
  return (
      <div className='h-50'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Chemise de venise</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Blouson jean</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>vetement enfant</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default SlideB;
