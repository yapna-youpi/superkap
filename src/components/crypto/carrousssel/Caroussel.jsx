import React,{ useState,useLayoutEffect } from 'react'

import './caroussel.css'
import img1 from './assets/crypt4.jpg'
import img2 from './assets/crypt3.jpg'
import img3 from './assets/crypt2.jpg'
import img4 from './assets/crypt1.jpg'

function Caroussel() {

    let [counter, setCounter] = useState(1);
    useLayoutEffect(()=>{

       let interval=setInterval(() => {
            // let radio = document.getElementById('radio');
            
            document.getElementById('radio' + counter ).checked = true;
            setCounter(counter++);
            if(counter > 4){
                counter = 1;
            }
        }, 5000);

        return ()=>{
            // console.log("clear interval ", interval)
            clearInterval(interval)
        }

    },[])

    return (
        <div className='caroussel'>
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    {/*----automatic navigation start---*/}
                    <div className="navigation-auto">
                        <div className="auto-bnt1"></div>
                        <div className="auto-bnt2"></div>
                        <div className="auto-bnt3"></div>
                        <div className="auto-bnt4"></div>
                    </div>
                    {/*---manual navigation start--*/}
                    <div className="navigation-manual">
                        <label htmlFor="radio1" className='manual-btn'></label>
                        <label htmlFor="radio2" className='manual-btn'></label>
                        <label htmlFor="radio3" className='manual-btn'></label>
                        <label htmlFor="radio4" className='manual-btn'></label>
                    </div>
                   
                    <div className="slide first">
                        <div className="d-block text-center position-absolute mt-5 pt-5 w-100 mx-auto">
                            <h3 className='w-100 mt-5 px-auto '>
                                <p className='text-center texe1'>Achetez, vendez vos crypto-monnaies</p>
                                <br/>
                                <p className='text-center texe3'>instantanément & à moindre coût</p>
                            </h3>
                        </div>
                        <img src={img4} alt="imge slide1"/>
                    </div>
                    <div className="slide">
                        <img src={img2} alt="imge slide2"/>
                    </div>
                    <div className="slide">
                        <img src={img3} alt="imge slide3"/>
                    </div>
                    <div className="slide">
                        <img src={img1} alt="imge slide4"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Caroussel

