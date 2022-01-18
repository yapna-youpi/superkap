import React from 'react'

import './business.css'
import Card from './card/Card.jsx'



function Business() {
    return (
        <div className='business' id="business">
            <div className="container-fluid">
                <div className="banner-business w-100"></div>
            </div>
            <Card name={"Produits de Beauté"} />
            <Card name={"Nouveaux produits"}/>
            <Card name={"Produits de Maison"}/>
            <Card name={"Produits D'entretient"}/>
        </div>
    )
}

export default Business
