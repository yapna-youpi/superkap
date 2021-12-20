import React, { useState } from 'react'
import { history } from 'react-router-dom'

import './sell.css'

function Sell() {
    const history = history();
    const [state, setState]=useState({amount: "", fees: "", crypto: "Bitcoin", payment: "CB", wallet: "", names: ""})
    const [transaction, setTransaction]=useState(null)

    const handleChange=(target)=>{
        setState({...state, [target.name]: target.value})
    }
    const handleSubmit=(e)=>{
        console.log(state)
        e.preventDefault()
        fetch("https://admin-superkap.herokuapp.com/transactions.json", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "montant": state.amount,
                "frais": state.amount*0.1,
                "crypto": state.crypto,
                "mode_paiement": state.payment,
                "adresse_crypto": state.wallet,
                "type_transaction": "Achat"
            })
        })
        .then(response => response.json()).then(data=>{
            console.log("the data ", data)
            setTransaction(data)
        })
        .catch(err => {
            console.error("an error are occur ", err);
        })
        return false
    }

    console.log(state)
    return (
        <div className='sell container-fluid'>
            <h1 className='text-center mt-5 pt-5' style={{color:'white'}}>Vendre la crypto</h1>
            <div className="row d-sm-flex flex-column-reverse flex-lg-row ">
                <div className="col-md-12 col-lg-6 d-lg-inline-block main-w3layouts wrapper">
                    <div className="main-agileinfo2">
                        <div className="agileits-top">
                            <form action="#" method="post" className='form-group' onSubmit={(e)=>handleSubmit(e)} >
                                <div className="form-group my-4">
                                    <label className='label' for="select">Choix de la crypto</label>
                                    <select class="form-select" name="crypto" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                        <option value="Bitcoin" selected>Bitcoin</option>
                                        <option value="Usdt">USDT (TRC20)</option>
                                        <option value="Ep">Euro payeer</option>
                                        <option value="Theter">Theter </option>
                                    </select>
                                </div>
                                <div className="form-group my-4">
                                    <label className='label' for="select">Mode de paiement</label>
                                    <select class="form-select" name="payment" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                        <option value="CB" selected>Carte Visa UBA cameroun</option>
                                        <option value="Mtn">Mtn Mobile Money</option>
                                        <option value="OM">Orange Money Cameroun</option>
                                        <option value="MTNF">MTN MOMO FLOAT CAMEROUN</option>
                                        <option value="CBSK">Carte Visa Crypto SuperKap</option>  
                                    </select>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Je disposer de: </label>
                                    <input type="number" name="amount" class="form-control input-sell" placeholder="montant correspondant a la quandite de btc" required onChange={(e)=>handleChange(e.target)} />
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Numero Telephone</label>
                                    <input type="tel" name="phone" class="form-control input-sell" placeholder="Telephone"
                                    required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                <div className="wthree-text">
                                    <label className="anim">
                                        <input type="checkbox" className="checkbox" required />
                                        <span>I Agree To The Terms & Conditions</span>
                                    </label>
                                    <div className="clear"> </div>
                                </div>
                                <button className='btn-sell'>sell</button>
                            </form>
                            <p>Don't have an Account? <a onClick={()=>history.push('/Signup')}> Login Now!</a></p>
                        </div>
                        </div>
                </div>


                <div className=" col-md-12 col-lg-6 d-lg-inline-block main-w3layouts wrapper">
                    <div className="main-agileinfo">
                        <div className="agileits-top">
                            <form action="#" method="post" className='form-group' onSubmit={(e)=>handleSubmit(e)} >
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Adresse du dépot </label>
                                    <input type="number" name="amount" class="form-control input-sell" placeholder="montant correspondant a la quandite de btc" required onChange={(e)=>handleChange(e.target)} />
                                </div>
                                <div className="row">
                                    <div className="col-6">Montant net en CFA</div>
                                    <div className="col-6">Montant net en devise crypto</div>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder='montant net' required/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">-</span>
                                    </div> 
                                    <input type="text" className="form-control" placeholder='devise net' required/>
                                </div>
                                <div class="form-group my-3">
                                    <label class="label" for="name">Nom du Compte</label>
                                    <input type="text"  name="names" class="form-control input-sell" placeholder="Nom et Prénom" required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Adresse wallet ou N° tel:</label>
                                    <input type="text"  name="wallet" class="form-control input-sell" placeholder="Entree votre adresse Blockchain" required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Sell
