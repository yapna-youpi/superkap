import React,{ useState,useLayoutEffect } from 'react'

import './caroussel.css'
import img1 from './assets/crypt4.jpg'
import img2 from './assets/crypt3.jpg'
import img3 from './assets/crypt2.jpg'
import img4 from './assets/crypt1.jpg'

function Caroussel() {

    // let [counter, setCounter] = useState(1);
    // useLayoutEffect(()=>{

    //     setInterval(() => {
    //         let radio = document.getElementById('#radio');
            
    //         document.getElementById('radio' + counter ).checked = true;
    //         counter++;
    //         if(counter > 4){
    //             counter = 1;
    //         }
    //     }, 5000);

    //     return clearInterval(setInterval);

    // },[])
    
   




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
                        <label for="radio1" className='manual-btn'></label>
                        <label for="radio2" className='manual-btn'></label>
                        <label for="radio3" className='manual-btn'></label>
                        <label for="radio4" className='manual-btn'></label>
                    </div>
                    <div className="slide first">
                    <img src={img1} alt="imge slide1"/>
                </div>
                <div className="slide">
                    <img src={img2} alt="imge slide2"/>
                </div>
                <div className="slide">
                    <img src={img3} alt="imge slide3"/>
                </div>
                <div className="slide">
                    <img src={img4} alt="imge slide4"/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Caroussel

