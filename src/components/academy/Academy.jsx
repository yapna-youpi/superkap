import React from 'react'

import Formation from '../home/formation/Formation'

import './academy.css'
import banner from './hero-careers.jpg'

function Academy() {
    return (
        <div>
            <div className="mb-5 mt-5 pt-2">
                <img className='academy-banner' src={banner} alt='bannier-formation' />
                <h1 className='w-100 mt-5 text-center pt-5 title-academy'>
                    <p className='text-center tex1'>Nos Différentes Formations</p>
                    <p className='text-center tex2'>&</p>
                    <p className='text-center tex3'>Les Profils Disponibles</p>
                </h1>
            </div>
            <Formation />
        </div>
    )
}

export default Academy
