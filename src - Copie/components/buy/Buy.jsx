import React, { useState } from 'react'

import './buy.css'

function Buy() {

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
        <div className='buy container-fluid'>
            <div className="row">
                <div className="col-6 w-100 main-w3layouts wrapper">
                    <h1 className='buy-title'>Acheter de la crypto</h1>
                    {/* <h1>Acheter de la crypto</h1> */}
                    { !transaction ? (<div className="main-agileinfo">
                        <div className="agileits-top">
                            <form action="#" method="post" className='form-group' onSubmit={(e)=>handleSubmit(e)} >
                                    <div className="form-group my-4">
                                        <label className='label' for="select">choix de la crypto</label>
                                        <select class="form-select" name="crypto" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                            <option value="Bitcoin" selected>Bitcoin</option>
                                            <option value="Usdt">USDT (TRC20)</option>
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
                        </div>
                    ): (<div className="">
                        <h1>La transaction a ete envoye, vous serez contactez d'ici peu</h1>
                        <h2>votre identifiant est le {transaction.id}</h2>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Buy
