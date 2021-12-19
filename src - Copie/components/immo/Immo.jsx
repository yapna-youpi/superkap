import React from 'react'

function Immo() {
    return (
        <div className='container-fluid mt-5 pt-5'>
            <div className="input-group">
                <input type="text" className="form-control"/>
                <div className="input-group-prepend">
                    <span className="input-group-text">-</span>
                </div>
                <input type="text" className="form-control"/>
            </div>
        </div>
    )
}

export default Immo

