import React, { useState } from 'react'

import './buy.css'

function Buy() {

    const [state, setState]=useState({amount: "", frees: "", crypto: "Bitcoin", paymentMod: "", wallet: "", names: ""})
    const [transaction, setTransaction]=useState(null)

    const handleChange=(target)=>{
        setState({...state, [target.name]: target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch("https://admin-superkap.herokuapp.com/transactions.json", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": {
                "montant": state.amount,
                "frais": state.amount*0.1,
                "crypto": state.crypto,
                "mode_paiement": "MM",
                "adresse_crypto": state.wallet,
                "type_transaction": "Achat"
            }
        })
        .then(response => response.json()).then(data=>{
            console.log("the data ", data)
        })
        .catch(err => {
            console.error("an error are occur ", err);
        })
        return false
    }

    console.log(state)
    return (
        <div className='buy'>
            <div className="main-w3layouts wrapper">
                <h1>Buy Bitcoins</h1>
                { !transaction ? (<div className="main-agileinfo">
                    <div className="agileits-top">
                        <form action="#" method="post" className='form-group' onSubmit={(e)=>handleSubmit(e)} >
                            <div class="form-group mb-3">
								<label class="label" for="name">j'ai besoin de </label>
								<input type="number" name="amount" class="form-control" placeholder="montant correspondant a la quandite de btc" required onChange={(e)=>handleChange(e.target)} />
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Noms et Prénoms</label>
								<input type="text"  name="names" class="form-control" placeholder="Nom et Prénom" required onChange={(e)=>handleChange(e.target)}/>
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Adresse wallet</label>
								<input type="text"  name="wallet" class="form-control" placeholder="Entree votre adresse Blockchain" required onChange={(e)=>handleChange(e.target)}/>
							</div>
                            <div class="form-group mb-3">
								<label class="label" for="name">Numero Telephone</label>
								<input type="tel" name="phone" class="form-control" placeholder="Telephone"
                                required onChange={(e)=>handleChange(e.target)}/>
							</div>
                            <div className="form-group my-4">
                                <label className='label' for="select">choix de la crypto</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Bitcoin</option>
                                    <option value="1">Usdt</option>
                                    <option value="2">another</option>
                                </select>
                            </div>
                            <div className="form-group my-4">
                            <label className='label' for="select">Mode de paiement</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Carte de credit</option>
                                    <option value="1">Mtn Mobile Money</option>
                                    <option value="2">Orange Money</option>
                                    <option value="3">another</option>
                                </select>
                            </div>
                            <div className="wthree-text">
                                <label className="anim">
                                    <input type="checkbox" className="checkbox" required />
                                    <span>I Agree To The Terms & Conditions</span>
                                </label>
                                <div className="clear"> </div>
                            </div>
                            <button className='btn-buy'>BUY</button>
                        </form>
                        <p>Don't have an Account? <a href="#"> Login Now!</a></p>
                    </div>
                </div>): (<div className="">
                    <h1>Transaction send you'll be contact in short time</h1>
                </div>)}
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
