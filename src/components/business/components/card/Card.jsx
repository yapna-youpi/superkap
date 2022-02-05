import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'

import Brique from '../brique/Brique'

import './card.css'
import busi2 from './assets/images/tof8.jpg'
import busi3 from './assets/images/tof9.jpg'
import busi4 from './assets/images/tof2.jpg'

function Card({name,Modalite}) {
    let history = useHistory();

    return (
        <div>
            <div className="container mt-3 pt-5">
                <h2 className='tex-title' style={{paddingLeft:'3%',fontWeight:'bold'}}>{name}</h2>
                <div className="row my-4">
                    <Brique Modalite={Modalite} />
                    <Brique Modalite={Modalite} />
                    <Brique Modalite={Modalite} />
                    <Brique Modalite={Modalite} />
                </div>
            </div>
        </div>
    )
}

export default Card
