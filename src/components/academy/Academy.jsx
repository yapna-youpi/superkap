import React from 'react'

import Formation from '../home/formation/Formation'

import './academy.css'
import banner from './hero-careers.jpg'

function Academy() {
    return (
        <div>
            <div className="mb-5 mt-5 pt-2">
                <img className='academy-banner' src={banner} alt='bannier-formation' />
            </div>
            <Formation />
        </div>
    )
}

export default Academy
