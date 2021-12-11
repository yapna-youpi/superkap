import React from 'react'

import './home.css'

function Home() {
    return (
        <div className='home'>
                {/* -- banner section-- */}
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="container" data-aos="fade-in">
                <h1>Welcome to Superkap</h1>
                <h2>Buy, sell and trading your cryptocurrencies instantly and for less</h2>
                <div className="d-flex align-items-center">
                    <i className="bx bxs-right-arrow-alt get-started-icon"></i>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
                </div>
            </section>

            <main id="main">

                    {/* -- why buy crypto -- */}
                <section id="why-us" className="why-us">
                <div className="container">

                    <div className="row">
                    <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                        <div className="content">
                        <h3>Why Choose Flexor for your company website?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                        </p>
                        <div className="text-center">
                            <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 d-flex">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box mt-4 mt-xl-0">
                                <i className="bx bx-receipt"></i>
                                <h4>Corporis voluptates sit</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            </div>
                            <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box mt-4 mt-xl-0">
                                <i className="bx bx-cube-alt"></i>
                                <h4>Ullamco laboris ladore pan</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                            </div>
                            <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box mt-4 mt-xl-0">
                                <i className="bx bx-images"></i>
                                <h4>Labore consequatur</h4>
                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </section>

                <section className="section" id="services-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 text-center">
                                <div className="section-heading">
                                    {/* heading */}
                                    <h2 className="section-title mb-2 text-white">
                                        Web Services
                                    </h2>

                                    {/* subheading */}
                                    <p className="mb-5 text-white">
                                        Rapoo can be used to create anything from a small marketing page to a sophisticated website.
                                    </p>
                                </div>
                            </div>
                        </div> 

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="web-service-block">
                                    <i className="ti-light-bulb"></i>
                                    <h3>Creative Design</h3>
                                    <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="web-service-block">
                                    <i className="ti-desktop"></i>
                                    <h3>Web Development</h3>
                                    <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="web-service-block">
                                    <i className="ti-announcement"></i>
                                    <h3>Digital Marketing</h3>
                                    <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 ">
                                <div className="web-service-block">
                                    <i className="ti-layers-alt"></i>
                                    <h3>Graphic Design</h3>
                                    <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 ">
                                <div className="web-service-block">
                                    <i className="ti-mobile"></i>
                                    <h3>App Development</h3>
                                    <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 ">
                                <div className="web-service-block">
                                    <i className="ti-settings"></i>
                                    <h3>Wordpress Installation</h3>
                                    <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
