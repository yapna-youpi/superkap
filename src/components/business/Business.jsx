import React, { useState } from 'react'

import './business.css'
import Card from './card/Card.jsx'
import Pagination from './pagination/Pagination';

function Business() {
    const [pagination, setPagination] = useState({
        _page:1,
        _limit:10,
        _totalRows:12,
    });
    function handlePageChange(newPage) {
        console.log("new Page:", newPage);
    }

    return (
        <div className='business' id="business">
            <div className="container-fluid">
                <div className="banner-business w-100"></div>
            </div>
            <Pagination  
                pagination={pagination}
                onPageChange={handlePageChange}
            />
            <Card name={"Produits de Beauté"} />
            <Card name={"Nouveaux produits"}/>
            <Card name={"Produits de Maison"}/>
            <Card name={"Produits D'entretient"}/>
        </div>
    )
}

export default Business
