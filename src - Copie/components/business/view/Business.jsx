import React from 'react'

import Pagination from '../components/pagination/Pagination'

import './business.css'

function Business() {
   
    
    return (
        <div className='business' id="business">
            <div className="container-fluid">
                <div className="banner-business w-100"></div>
            </div>
            <Pagination />
            {/* <Card name={"Produits de Beauté"} />
            <Card name={"Nouveaux produits"}/>
            <Card name={"Produits de Maison"}/>
            <Card name={"Produits D'entretient"}/> */}
        </div>
    )
}

export default Business
