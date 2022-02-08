import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading'

import './buy.css'
const PaymentWays={
    p1: [{lab: 'Carte Visa UBA cameroun', val: 'CB'}, {lab: 'MTN Mobile money', val: 'Mtn'}, {lab: 'Orange Money Cameroun', val: 'OM'}, {lab: 'MTN MOMO FLOAT CAMEROUN', val: 'MTNF'}, {lab: 'Carte Visa Crypto SuperKap', val: 'CBSK'}],
    p2: [{lab: 'MOMO international', val: 'MOMO international'}],
    p3: [{lab: 'Express Union', val: 'EU'}, {lab: 'Money gram', val: 'MG'}, {lab: 'Western Union', val: 'WU'}],
    p4: [{lab: 'Cinet Pay', val: 'Cinet Pay '}],
    p5: [{lab: 'Cinet Pay', val: 'Cinet Pay'}],
    p6: [{lab: 'Money gram', val: 'MG'}, {lab: 'Werstern Union', val: 'WU'}, {lab: 'World Remit', val: 'WR'}, {lab: 'MOMO/OM', val: 'MOMO/OM'}],

}

function Buy() {
    const history =  useHistory();

    const [loader,setLoader] = useState(false);

    const [state, setState]=useState({amount: "", fees: "", crypto: "Bitcoin", country: 'CAMEROUN-p1', payment: "CB", wallet: "", numAccount: "", names: "", phone: ""})
    const [transaction, setTransaction]=useState(false)

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
                "country": state.country.split('-')[0],
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
    const setPaymentsWays=()=>{
        let way=state.country.split('-')[1]
        console.log("the way ", way)
        return PaymentWays[way].map((way, i)=><option key={`way-${i}`} value={way.val}>{way.lab}</option>)
    }
    console.log(state)
    // console.log(setPaymentsWays())
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
                                    <label className='label' htmlFor="select">Choix de la crypto</label>
                                    <select className="form-select" name="crypto" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                        <option value="Bitcoin" >Bitcoin</option>
                                        <option value="Usdt">USDT (TRC20)</option>
                                        <option value="Euro PAYEER">Euro payeer</option>
                                        <option value="Litecoin">Litecoin </option>
                                        <option value="Solana">Solana </option>
                                        <option value="Autre">Autre... Contacter support </option>
                                    </select>
                                </div>
                                <div className="form-group my-4">
                                    <label className='label' htmlFor="select">Choix du pays</label>
                                    <select className="form-select" name="country" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                        <option value="CAMEROUN-p1" >CAMEROUN</option>
                                        <option value="GABON/CONGO-p2">GABON/CONGO brazza </option>
                                        <option value="TCHAD/CENTRAFRIQUE-p3">TCHAD/CENTRAFRIQUE</option>
                                        <option value="RDC-p4">RD CONGO</option>
                                        <option value="UMAO-p5">CTE D'IVOIRE/MALI/SENEGAL/BENIN/BURKINA FASO/GUINE CONAKRY</option>
                                        <option value="Autres-p6">Autre Pays</option>
                                    </select>
                                </div>
                                <div className="form-group my-4">
                                    <label className='label' htmlFor="select">Mode de paiement</label>
                                    <select className="form-select" name="payment" aria-label="Default select example" onChange={(e)=>handleChange(e.target)}>
                                        {setPaymentsWays()}
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">J'ai besoin de: </label>
                                    <input type="number" name="amount" className="form-control input-buy" placeholder="montant crypto en $" required onChange={(e)=>handleChange(e.target)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">Adresse wallet</label>
                                    <input type="text"  name="wallet" className="form-control input-buy" placeholder="Entrez l'adresse de votre wallet" required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                {
                                    (state.payment.indexOf("CB")+1) ? (
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">numero carte</label>
                                            <input type="text"  name="numAccount" className="form-control input-buy" placeholder="numero de la carte bancaire"
                                                required onChange={(e)=>handleChange(e.target)}/>
                                        </div>):(
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">numero de compte</label>
                                    <input type="text"  name="numAccount" className="form-control input-buy" placeholder="numero telephone du compte"
                                    required onChange={(e)=>handleChange(e.target)}/>
                                </div>)
                                }
                        </div>
                    </div>
                </div>
                <div className=" col-md-12 col-lg-6 main-w3layouts wrapper">
                    <div className="main-buy">
                        <div className="agileits-top">
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">Montant a envoyer en XAF : </label>
                                    <input type="tel" name="phone" className="form-control input-buy" placeholder="Telephone"
                                        disabled value={Math.floor(state.amount*1.1*550)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">frais en XAF : </label>
                                    <input type="tel" name="phone" className="form-control input-buy" placeholder="Telephone"
                                        disabled value={Math.floor(state.amount*0.1*550)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" htmlFor="name">Numero Telephone</label>
                                    <input type="tel" name="phone" className="form-control input-buy" placeholder="Telephone"
                                    required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="label" htmlFor="name">Nom du Compte</label>
                                    <input type="text"  name="names" className="form-control input-buy" placeholder="Nom et Prénom" required onChange={(e)=>handleChange(e.target)}/>
                                </div>
                                <div className="wthree-text">
                                    <label className="anim">
                                        <input type="checkbox" className="checkbox" required />
                                        <span> I Agree To The Terms & Conditions</span>
                                    </label>
                                    <div className="clear"> </div>
                                </div>
                                <button className='btn-buy'>
                                    { loader? <ReactLoading type="spin" color="#ffffff" width="45px" height="45px" /> 
                                            : 'BUY'}
                                </button>
                            {/* <p>Don't have an Account? <a href="#"> Login Now!</a></p> */}
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
