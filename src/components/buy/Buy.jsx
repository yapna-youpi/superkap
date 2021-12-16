import React from 'react'

import './buy.css'

function Buy() {
    return (
        <div className='buy'>
            <div className="main-w3layouts wrapper">
                <h1>Buy Bitcoins</h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form action="#" method="post" className='form-group'>
                            <div class="form-group mb-3">
								<label class="label" for="name">j'ai besoin de </label>
								<input type="text" class="form-control" placeholder="montant correspondant a la quandite de btc" required/>
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Noms et Prénoms</label>
								<input type="text" class="form-control" placeholder="Nom et Prénom" required/>
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Adresse Blockchain</label>
								<input type="text" class="form-control" placeholder="Entree votre adresse Blockchain" required/>
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Numero Telephone</label>
								<input type="text" class="form-control" placeholder="Telephone" required/>
							</div>
                            <div className="wthree-text">
                                <label className="anim">
                                    <input type="checkbox" className="checkbox" required="" />
                                    <span>I Agree To The Terms & Conditions</span>
                                </label>
                                <div className="clear"> </div>
                            </div>
                            <input type="submit" value="BUY" />
                        </form>
                        <p>Don't have an Account? <a href="#"> Login Now!</a></p>
                    </div>
                </div>
                <ul className="colorlib-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Buy
