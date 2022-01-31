import React from 'react'
import { useHistory } from 'react-router-dom'

import fot from '../assets/fot1.jpg';
import './appartmin.css'

function AppartMin() {
    let history=useHistory()
    return (
        <div className="appart-min" onClick={()=>history.push('/immo2/details2')}>
            <img src={fot} alt="Coin"/>
            <div className="details">
                <div className="line">
                    <div className="name"><b>Coin, Andalousie</b></div>
                    <div className="price">49$ / nuit</div>
                </div>
                <div className="line">
                    <div className="distance">A 400 Kilometres</div>

                </div>
            </div>
        </div>
    )
}

export default AppartMin
