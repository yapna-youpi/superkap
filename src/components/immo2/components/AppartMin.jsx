import React from 'react'
import { useHistory } from 'react-router-dom'

import fot from '../assets/fot1.jpg';
import './appartmin.css'

function AppartMin({data}) {
    let history=useHistory()
    return (
        <div className="appart-min" onClick={()=>history.push('/immo2/details2/:1')}>
            <img src={fot} alt="Coin"/>
            <div className="details">
                <div className="line">
                    <div className="name"><b>{data.lieu}, {data.ville}</b></div>
                    <div className="price">{data.prix} XAF / nuit</div>
                </div>
                <div className="line">
                    <div className="distance">{data.titre}</div>
                    <div className="distance">400 m2</div>
                </div>
            </div>
        </div>
    )
}

export default AppartMin
