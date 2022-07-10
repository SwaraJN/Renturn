import React from 'react'
import { SlideShow } from './SlideShow'
import "../Style/Homestyle.css"
import {Footer} from './Footer.js'

function Home() {
  return (
    <div>
        <div className="slider">
<SlideShow/>
        </div>
        <div className="category">
    <div className="Mens">Mens</div>
    <div className="Womens">Womens</div>
    <div className="Offers">Offers</div>
        </div>
        <div className="about">
<h1>About </h1>
        </div>

        <div className="footerss">
        {/* < Footer /> */}
        </div>
        </div>
  )
}

export default Home