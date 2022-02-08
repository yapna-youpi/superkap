import React from 'react'

import './caroussel.css'

function Caroussel() {
    return (
        <div className='caroussel'>
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    {/*---slides images start---*/}
                    <div className="slide first">
                        <img src={./assets/img.jpg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caroussel

