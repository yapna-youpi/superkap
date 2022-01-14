import React from 'react'
import { MdOutlineStarOutline } from 'react-icons/md'
import { MdOutlineStarPurple500 } from 'react-icons/md'

import './business.css'
import Card from './card/Card.jsx'
import busi1 from './assets/images/tof3.jpg'
import busi2 from './assets/images/tof8.jpg'
import busi3 from './assets/images/tof9.jpg'
import busi4 from './assets/images/tof2.jpg'


function Business() {
    return (
        <div className='business' id="business">
            <div className="container-fluid">
                <div className="banner-business w-100"></div>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Business
