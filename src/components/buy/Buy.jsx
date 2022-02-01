import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading'

import './buy.css'

function Buy() {
    const history =  useHistory();

    const [loader,setLoader] = useState(false);

    const [state, setState]=useState({amount: "", fees: "", crypto: "Bitcoin", payment: "CB", wallet: "", numAccount: "", names: "", phone: ""})
    const [transaction, setTransaction]=useState(true)

    const handleChange=(target)=>{
        setState({...state, [target.name]: target.value})
    }
    const handleSubmit=(e)=>{
        console.log(state)
        e.preventDefault()
        setLoader(true);
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
                "numAccount": state.numAccount,
                "adresse_crypto": state.wallet,
                "type_transaction": "Achat",
                "names": state.names,
                "phone": state.phone
            })
        })
        .then(response => response.json()).then(data=>{
            setLoader(false);
            console.log("the data ", data)
            setTransaction(data)
        }) 
        .catch(err => {
            setLoader(false);
            console.error("an error are occur ", err);
        })
        return false
    }

    console.log(state)
    return (
        <div className='buy container-fluid'>
            <h1 className='text-center mt-5 pt-5' style={{color:'white'}}>Acheter de la crypto</h1>
            {
                transaction ? (
                    <div className="row">
                        <center>
                        <div className="col-md-8 bg-white p-5 m-5" >
                            <h2>votre operation a ete enregistree vous serez contacte sous peu</h2>
                            <h4>votre identifiant de transaction est le {transaction.id}</h4>
                        </div>
                        </center>
                    </div>):(
            <div className="row d-sm-flex flex-column-reverse flex-lg-row ">
                <form action="#" method="post" className='d-sm-block d-lg-flex  form-group' onSubmit={(e)=>handleSubmit(e)} >
                <div className="col-md-12 col-lg-6  main-w3layouts wrapper">
                    <div className="main-buy">
                        <div className="agileits-top">
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
                                <div className="form-group my-4">
                                    <label className='label' for="select">Choix de la crypto</label>
                                    <select class="form-select" name="crypto" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                        <option value="Bitcoin" selected>Bitcoin</option>
                                        <option value="Usdt">USDT (TRC20)</option>
                                        <option value="Ep">Euro payeer</option>
                                        <option value="Theter">Theter </option>
                                    </select>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">J'ai besoin de: </label>
                                    <input type="number" name="amount" class="form-control input-buy" placeholder="montant crypto en $" required onChange={(e)=>handleChange(e.target)} />
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Adresse wallet</label>
                                    <input type="text"  name="wallet" class="form-control input-buy" placeholder="Entrez l'adresse de votre wallet" required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                {
                                    (state.payment.indexOf("CB")+1) ? (
                                        <div class="form-group mb-3">
                                            <label class="label" for="name">numero carte</label>
                                            <input type="text"  name="numAccount" class="form-control input-buy" placeholder="numero de la carte bancaire"
                                                required onChange={(e)=>handleChange(e.target)}/>
                                        </div>):(
                                <div class="form-group mb-3">
                                    <label class="label" for="name">numero de compte</label>
                                    <input type="text"  name="numAccount" class="form-control input-buy" placeholder="numero telephone du compte"
                                    required onChange={(e)=>handleChange(e.target)}/>
                                </div>)
                                }
                        </div>
                    </div>
                </div>
                <div className=" col-md-12 col-lg-6 main-w3layouts wrapper">
                    <div className="main-buy">
                        <div className="agileits-top">
                            {/* <form action="#" method="post" className='form-group' onSubmit={(e)=>handleSubmit(e)} > */}
                                {/* <div class="form-group mb-3">
                                    <label class="label" for="name">J'ai besoin de </label>
                                    <input type="number" name="amount" class="form-control input-buy" placeholder="montant correspondant a la quandite de btc" required onChange={(e)=>handleChange(e.target)} />
                                </div> */}
                                {/* <div className="row">
                                    <div className="col-6">Montant net en CFA</div>
                                    <div className="col-6">Montant net en devise crypto</div>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder='montant net' required/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">-</span>
                                    </div> 
                                    <input type="text" className="form-control" placeholder='devise net' required/>
                                </div> */}
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Montant a envoyer en XAF : </label>
                                    <input type="tel" name="phone" class="form-control input-buy" placeholder="Telephone"
                                        disabled value={Math.floor(state.amount*1.1*550)} />
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">frais en XAF : </label>
                                    <input type="tel" name="phone" class="form-control input-buy" placeholder="Telephone"
                                        disabled value={Math.floor(state.amount*0.1*550)} />
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Numero Telephone</label>
                                    <input type="tel" name="phone" class="form-control input-buy" placeholder="Telephone"
                                    required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                <div class="form-group my-3">
                                    <label class="label" for="name">Nom du Compte</label>
                                    <input type="text"  name="names" class="form-control input-buy" placeholder="Nom et Prénom" required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                <div className="wthree-text">
                                    <label className="anim">
                                        <input type="checkbox" className="checkbox" required />
                                        <span>I Agree To The Terms & Conditions</span>
                                    </label>
                                    <div className="clear"> </div>
                                </div>
                                <button className='btn-buy'>
                                    { loader? <reactLoading type="spin" color="#ffffff" width="45px" height="45px" /> 
                                            : 'BUY'}
                                </button>
                            <p>Don't have an Account? <a href="#"> Login Now!</a></p>
                        </div>
                        </div>
                </div>
                </form>
            </div>)
            }
        </div>
    )
}

export default Buy
