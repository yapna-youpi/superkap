import React from 'react'
import { FaStar } from 'react-icons/fa'

import './details.css'
import fot1 from '../../assets/fot1.jpg'
import fot2 from '../../assets/fot2.jpg'
import fot3 from '../../assets/fot3.jpg'
import fot4 from '../../assets/fot4.jpg'
import fot5 from '../../assets/fot5.jpg'

function Details() {
    return (
        <div className="appart-details">
            <div className="head">
                <h1>Chulavista Dome</h1>
                <div className="info">
                    <span> <FaStar className="star" size={15} color="#00B67A" /> info 1 en gras</span>
                    <span>info 2 sans gras</span>
                    <span>info 3 </span>
                </div>
                <div className="images">
                    <div className="poster">
                        <img src={fot1} alt=""/>
                    </div>
                    <div className="thumbnails">
                        <img src={fot2} alt=""/>
                        <img src={fot3} alt=""/>
                        <img src={fot4} alt=""/>
                        <img src={fot5} alt=""/>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="description">
                    <h2>Cabane dans les arbres <b>·</b> Hôte : Anna</h2>
                    <span>3 voyageurs <b>·</b> 1 chambre <b>·</b> 2 lits <b>·</b> 1,5 salle de bain</span>
                </div>
                <div className="price">
                    <h3>2 000 000 XAF</h3>
                    <span>Payable en plusieurs fois <b>·</b> transaction avec notaire </span>
                </div>
            </div>
        </div>
    )
}

export default Details
