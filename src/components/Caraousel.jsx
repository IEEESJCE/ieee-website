import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../css/caraousel.css'
function Caraousel() {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={true}
        selectedItem={0}
        transitionTime={700}
        showStatus={false}
      >
        <div>
          <img src="/photos/gallery/sl1.jpg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/sl2.jpeg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/sl3.jpg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/sl4.jpeg" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/sl5.jpeg" alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Caraousel
