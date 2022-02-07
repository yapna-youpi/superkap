import React from 'react';

function Service() {
  
    return ( 
        <div>
            <div id="services" className="services section-bg pt-5  pb-0 pb-sm-5  mt-5 mt-sm-0  ">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                <h2 style={{fontWeight:'bold'}}>Pourquoi la Cryptomonnaie ?</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
                </div>

                <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                    <div className="icon-box icon-box-pink">
                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                    <h4 className="title">Rapide</h4>
                    <p >Les transactions sont presques instantanées ne prennt quelques minutes</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box icon-box-cyan">
                    <div className="icon"><i className="bx bx-file"></i></div>
                    <h4 className="title">Pas Cher</h4>
                    <p >le prix de la transaction du Bitcoin est presque de zéro</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-green">
                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                    <h4 className="title">Global</h4>
                    <p >l'utilisation de la cryptomonnaie est limitée uniquement par la disponibilité d'internet</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bx-world"></i></div>
                    <h4 className="title">Sûr</h4>
                    <p >aucune fraude de retro-facturation durant le processus de l'opération</p>
                    </div>
                </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default Service;