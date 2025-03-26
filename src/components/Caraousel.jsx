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
          <img src="/photos/gallery/caraousel/IMG_5944.JPG" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/IMG_0350.JPG" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/IMG_3552.JPG" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/IMG_3103.JPG" alt="" />
        </div>
        <div>
          <img src="/photos/gallery/caraousel/IMG_6602.JPG" alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Caraousel
