import dynamic from "next/dynamic";
const About = () => {
  return (
    <>
    <main>
    <div id="banner-section" className="page-title" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/banner/barrel2.jpg)`}}>
        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrubms text-center">
                            <h2 className="title">About Us</h2>
                            <ul className="d-flex justify-content-center mt-20">
                                <li className="mb-20"><a href="/">Home</a></li>
                                <li> / </li>
                                <li><span className="active">About Us</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="about-section" className="mt-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 col-12">
                    <div className="section-title style-01">
                        <div className="title-transparent">
                            <span>About Company</span>
                        </div>
                        <h3 className="subtitle">About Company</h3>
                        <h2 className="title"><span>We Has a Proud</span> Tradition of Service as Fuel Transporter Since 2012</h2>
                        <p className="text mt-30">Running sice 12+ years ago by young profesionals with experience in Energy Trading and Investment. The Knowledge they have gained from previous companies makes them full of good and bad experiences, and can achieve business targets with precision.</p>
                    </div>
                    <div className="row xs-mt-20">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-info mt-50 xs-mt-20">
                                <div className="icon">
                                    <i className="flaticon-businessman"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">INTEGRITY</h4>
                                </div>
                            </div>
                            <p className="text mt-30">Create and grow sustainable value for our stakeholders through the application.</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-info mt-50 xs-mt-20">
                                <div className="icon">
                                    <i className="flaticon-handshake"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">COMITMENT</h4>
                                </div>
                            </div>
                            <p className="text mt-30">To be a recognized as the Oil & Gas Trader company focused on growing sustainable business.</p>
                        </div>
                    </div>                    
                </div>

                <div className="bg-shape-img">
                    <img src="images/bg-shape.png" alt=""/>
                </div>
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-img-box pl-30 xs-mt-70 md-mt-70">
                        <div className="about-img style-01">
                            <img src="images/banner/gasindustry.jpg" alt="about image"/>
                        </div>
                        <div className="content">
                            <h4><span className="counter">12</span><span><sup>+</sup></span> Years</h4>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <br/><br/><br/><br/><br/>

    <section id="benifits">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-12">
                    <div className="benifits-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex benifits-content-detl" align="center">
                                    <div className="heading">
                                        <h1><span className="counter" style={{fontSize:"72px"}}>753</span> <sup>+</sup></h1>
                                        <h4>Project Success</h4>
                                    </div>
                                    <div className="content">
                                        <h1><span className="counter" style={{fontSize:"72px"}}>579</span> <sup>+</sup></h1>
                                        <h4>Our Equipments</h4>
                                    </div>
                                    <div className="content">
                                        <h1><span className="counter" style={{fontSize:"72px"}}>342</span> <sup>+</sup></h1>
                                        <h4>Satisfied Clients</h4>
                                    </div>
                                    <div className="content">
                                        <h1><span className="counter" style={{fontSize:"72px"}}>231</span> <sup>+</sup></h1>
                                        <h4>Industry Expertise</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-6" align="center">
                    <a href="/contact" className="btn btn-secondary mt-60 xs-mt-20">
                        <i className="flaticon-right icon-arrow before"></i>
                        <span className="label">Contact Us</span>
                        <i className="flaticon-right icon-arrow after"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="team-section" className="team-area mt-90">
        <div className="container">
            <div className="section-title style-01">
                <div className="title-transparent">
                    <span>Our Teams</span>
                </div>
                <h3 className="subtitle">Our Teams</h3>
            </div>
            <div className="row justify-content-center">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="team-block mt-30">
                            <div className="team-img">
                                <img src="images/team/1.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <h4>Martinez Silva</h4>
                                <span>General Manager</span>
                            </div>
                            <div className="social d-flex mt-10">
                                <ul className="d-flex">
                                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i className="flaticon-linkedin"></i></a></li>
                                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                                    <li><a href="#"><i className="flaticon-dribbble-logo"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="team-block mt-30">
                            <div className="team-img">
                                <img src="images/team/2.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <h4>Martinez Silva</h4>
                                <span>General Manager</span>
                            </div>
                            <div className="social d-flex mt-10">
                                <ul className="d-flex">
                                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i className="flaticon-linkedin"></i></a></li>
                                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                                    <li><a href="#"><i className="flaticon-dribbble-logo"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="team-block mt-30">
                            <div className="team-img">
                                <img src="images/team/3.jpg" alt=""/>
                            </div>
                            <div className="content">
                                <h4>Martinez Silva</h4>
                                <span>General Manager</span>
                            </div>
                            <div className="social d-flex mt-10">
                                <ul className="d-flex">
                                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i className="flaticon-linkedin"></i></a></li>
                                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                                    <li><a href="#"><i className="flaticon-dribbble-logo"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
    <script async src="assets/js/main.js"></script>
    <script async src="assets/js/jarallax.min.js"></script>
    <script async src="assets/js/counter.js"></script>
    </>
  )
}

export default dynamic (() => Promise.resolve(About), {ssr: false})
