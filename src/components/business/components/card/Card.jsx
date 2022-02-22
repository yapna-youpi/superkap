import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'

import Brique from '../brique/Brique'

import './card.css'


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
