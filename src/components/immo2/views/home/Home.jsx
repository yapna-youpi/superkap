import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'

import './home.css'
import AppartMin from '../../components/AppartMin'
import fot1 from '../../assets/fot1.jpg';
import fot2 from '../../assets/fot2.jpg';
import fot3 from '../../assets/fot3.jpg';
import fot4 from '../../assets/fot4.jpg';

const Loader = () => (
    <div className="loader" style={{padding: '10%'}}>
        <ReactLoading type="spin" color="#00B67A" height={100} width={100} />
    </div>
)

function Home() {
    const [loader, setLoader]=useState(false)
    const [state, setState]=useState([{}])
    useEffect(()=>{
        fetch('https://superkap-admin.herokuapp.com/immobiliers.json')
            .then(response=>response.json()).then(data=>{
                console.log("the data ", data)
                setState(data)
            })
            .catch(error=>{
                console.log("une erreur est survenue ", error)
            })
    }, [])

    const load=()=>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }
    console.log("the state ", state)
    return (
        <div className="immo-home">
            <div className="brand">
                <h1> Où rêvez-vous de vivre ? </h1>
                <div className="search">
                    <input type="text" placeholder='Trouvez un bien immobilier'/>
                    <button>Rechercher</button>
                </div>
                <h6>1,525,363 annonces immobilières au Cameroun sur le grand site Superkap !</h6>
            </div>
            <div className="cats-container">
                <div className="">
                    <h2 className='text-center'>Que cherchez-vous ? </h2>
                    <div className="cats">
                        <div className="cat"  style={{backgroundImage: "url(" + fot1 + ")"}}
                            onClick={load}
                        >
                            <h2>Une Maison</h2>
                        </div>
                        <div className="cat"  style={{backgroundImage: "url(" + fot2 + ")"}}
                            onClick={load}
                        >
                            <h2>Un Appartement</h2>
                        </div>
                        <div className="cat"  style={{backgroundImage: "url(" + fot3 + ")"}}
                            onClick={load}
                        >
                            <h2>Un Terrain</h2>
                        </div>
                        <div className="cat"  style={{backgroundImage: "url(" + fot4 + ")"}}
                            onClick={load}
                        >
                            <h2>Un Logement Etudiant</h2>
                        </div>
                    </div>    
                </div>
            </div>
            <h1>Listes des immobiliers</h1>
            <div className="apparts">
                { loader ? <Loader />:<>
                    {
                        state.map((appart, i)=><AppartMin data={appart} />)
                    }
                    <AppartMin data={state[0]} />
                    <AppartMin data={state[0]} />
                    <AppartMin data={state[0]} />
                    <AppartMin data={state[0]} />
                    <AppartMin data={state[0]} />
                    <AppartMin data={state[0]} />
                    <AppartMin data={state[0]} />
                </>  }

            </div>
            
        </div>
    )
}

export default Home
