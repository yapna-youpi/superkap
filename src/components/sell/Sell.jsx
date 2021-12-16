import React from 'react'

import './sell.css'

function Sell() {
    return (
        <div className='sell'>
            <div className="main-w3layouts wrapper">
                <h1>Sell Bitcoins</h1>
                <h5>Vous voulez Vendre  d'autres Cryptomonnaies ou monnaies électroniques ? </h5>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form action="#" method="post" className='form-group'>
                            <div class="form-group mb-3">
								<label class="label" for="name">Vous disposez de :</label>
								<input type="text" class="form-control" placeholder="de quel quandite de bitcoins disposé vous ?" required/>
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Noms et Prénoms</label>
								<input type="text" class="form-control" placeholder="Nom et Prénom" required/>
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
                            <input type="submit" value="SELL" />
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

export default Sell
