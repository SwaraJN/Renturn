// import React from 'react';
// import { Zoom } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// import  "./images/Rent1.jpg"
// import  "./images/Rent2.jpg"

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../HomeC/images/Rent1.jpg'
import '../HomeC/images/Rent2.jpg'

 const slideImages = [
  {
    url: '../HomeC/images/Rent1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '../HomeC/images/Rent2.jpg',
    caption: 'Slide 2'
  },
  {
    url: '../HomeC/images/Rent1.jpg',
    caption: 'Slide 3'
  },
];

export const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}