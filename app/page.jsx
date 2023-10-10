import dynamic from "next/dynamic";

async function getData(){
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await fetch("http://localhost:3001/prices/weekly")
    return res.json()
}
const oilprice = await getData()
const Home = () => {
    return (
        <>
        <main>
        {/* <!-- Hero start --> */}
        <section id="hero-section-one" className="hero-slider hero-slider-one style-01">
            <div className="hero-bg-01" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/slide/slide1.jpg)`}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="hero-content-one">
                                    <span className="subtitle">WE TRADE & TRANSPORTING ENERGY</span>
                                    <h2 className="title">Fueling The Future</h2>
                                    <p style={{color:`#fff`}}>We are ready to trade & transporting various types of fuel to ASWP (Any Safe World Port). We are here to bring energy to your place. Safety, punctuality and professionalism are at the heart of our work.</p>
                                    <div className="hero-btn mt-50 xs-mt-30">
                                        <a href="/" className="btn btn-secondary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Get Started</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                        <a href="/contact" className="btn btn-primary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Contact Us</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg-01" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/slide/slide2.jpg)`}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content-one">
                                    <span className="subtitle">WE TRADE & TRANSPORTING ENERGY</span>
                                    <h2 className="title">Fueling The Future</h2>
                                    <p style={{color:`#fff`}}>We are ready to trade & transporting various types of fuel to ASWP (Any Safe World Port). We are here to bring energy to your place. Safety, punctuality and professionalism are at the heart of our work.</p>
                                    <div className="hero-btn mt-50 xs-mt-30">
                                        <a href="/" className="btn btn-secondary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Get Started</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                        <a href="/contact" className="btn btn-primary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Contact Us</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg-01" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/slide/slide3.jpg)`}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content-one">
                                    <span className="subtitle">WE TRADE & TRANSPORTING ENERGY</span>
                                    <h2 className="title">Fueling The Future</h2>
                                    <p style={{color:`#fff`}}>We are ready to trade & transporting various types of fuel to ASWP (Any Safe World Port). We are here to bring energy to your place. Safety, punctuality and professionalism are at the heart of our work.</p>
                                    <div className="hero-btn mt-50 xs-mt-30">
                                        <a href="/" className="btn btn-secondary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Get Started</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                        <a href="/contact" className="btn btn-primary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Contact Us</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Hero end -->

        <!-- Benifits start --> */}
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
            </div>
        </section>
        {/* <!-- Benifits end -->

        <!-- About start --> */}
        <section id="about-section" className="mt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="section-title style-01">
                            <div className="title-transparent">
                                <span>About Company</span>
                            </div>
                            <h3 className="subtitle">About Company</h3>
                            <h2 className="title"><span>We Have a Proud</span> Tradition of Service as Fuel Transporter Since 2012</h2>
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
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <a href="/about" className="btn btn-secondary mt-60 xs-mt-20">
                                    <i className="flaticon-right icon-arrow before"></i>
                                    <span className="label">Read More</span>
                                    <i className="flaticon-right icon-arrow after"></i>
                                </a>
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
        {/* <!-- About end -->

        <!-- Service start --> */}
        <section id="service-section" className=" mt-120">
            <div className="overlay">
                <div className="container">
                    <div className="row align-items-center mb-30">
                        <div className="col-lg-6 col-md-12">
                            <div className="service-title section-title style-02">
                                <div className="title-transparent">
                                    <span>OUR SERVICES</span>
                                </div>
                                <h3 className="subtitle">OUR SERVICES</h3>
                                <h2 className="title">We Provide Best Services </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="service-block style-01 mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-gas"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="title"><a href="/">OIL & GAS</a></h2>
                                    <p className="text">Agarocorp Oil & Gas LLC engaging in oil and gas trade based in Dubai - Uni Arab Emirates. These region are the largest trading source for petroleum refine products such as Diesel, Gasoline, Jet A1, Crude, LPG, LNG and so on.</p>
                                </div>
                                <div className="service-btn mt-30">
                                    <a href="/about"><i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="service-block style-01 active mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-crane-2"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="title"><a href="/">FUEL TRANSPORTING</a></h2>
                                    <p className="text">Consisting of 2 aframax, we are ready to deliver your fuel needs to every port that can be reached by our fleet throughout ASWP (Any Safe World Port).</p><br/>
                                </div>
                                <div className="service-btn mt-30">
                                    <a href="/about"><i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12" align="center">
                            <div className="service-block style-01 mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="service-content">
                                    <h1 className="title"><a href="/"><span className="counter" style={{fontSize:"72px"}}>600</span>
                                    <sup>+</sup>
                                    <br/>Completed Deliveries</a></h1>
                                    <p className="text">We use an integrated delivery system on our project to create a better environment for our employees and partners, and deliver better to our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Service end -->

        <!-- Works start --> */}
        <section id="works-section" className="xs-mt-100 md-mt-100 mt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="works-title section-title style-01">
                            <div className="title-transparent">
                                <span>HOW WE WORKS</span>
                            </div>
                            <h3 className="subtitle">HOW WE WORKS</h3>
                            <h2 className="title"><span>We Constructed </span>a Secure Experience For You</h2>
                            <p className="text mt-30">Lets talk about how we stand No. 01 position in the world!</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">
                                        <div className="icon">
                                            <i className="flaticon-magnifier" style={{fontSize:"50px"}}></i>
                                        </div>
                                    </span>
                                    <h4 className="title">SELECT YOUR SERVICES</h4>
                                    <p className="text">Please choose our service, we will provide an extraordinary experience for you</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">
                                        <div className="icon">
                                            <i className="flaticon-checkmark" style={{fontSize:"50px"}}></i>
                                        </div>
                                    </span>
                                    <h4 className="title">COMPLETE YOUR DATA</h4>
                                    <p className="text">After your service is selected, complete your company data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">
                                        <div className="icon">
                                            <i className="flaticon-calendar-1" style={{fontSize:"50px"}}></i>
                                        </div>
                                    </span>
                                    <h4 className="title">MAKE AN APPOINTMENT</h4>
                                    <p className="text">Schedule a meeting to discuss what you want to achieve in your business, we will provide the best solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">
                                        <div className="icon">
                                            <i className="flaticon-startup" style={{fontSize:"50px"}}></i>
                                        </div>
                                    </span>
                                    <h4 className="title">GET AMAZING SERVICES</h4>
                                    <p className="text">Our professional services are ready to make your dreams come true.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="works-img-box">
                            <img src="images/banner/oldrefineryplant.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="works-shape-01">
                            <img src="images/dot-shape-white.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Works end -->

        <!-- Why Choose us --> */}
        <section id="service-section" className=" mt-120">
            <div className="overlay">
                <div className="container">
                    <div className="row align-items-center mb-30">
                        <div className="col-lg-6 col-md-12">
                            <div className="service-title section-title style-02">
                                <div className="title-transparent">
                                    <span>WHY CHOOSE US</span>
                                </div>
                                <h3 className="subtitle">WHY CHOOSE US</h3>
                                <h2 className="title">Experience Work With Global Industries</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="works-img-box mt-30">
                                <img src="images/banner/chemicaltankeronoffshore.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="service-block style-01 mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-pipes"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="/">ARE ALWAYS READY TO SERVE</a></h4>
                                    <p className="text"><i className="flaticon-next"></i> We Have Professional Workers</p>
                                    <p className="text"><i className="flaticon-next"></i> On Time In Progress</p>
                                    <p className="text"><i className="flaticon-next"></i> Friendly To Serve Customers</p>
                                    <p className="text"><i className="flaticon-next"></i> Give The Best & Fair</p>
                                    <br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Why Choose us end -->

        <!-- Get in touch start --> */}
        <section id="get-in-touch-section" data-jarallax='{"speed": 0.6}' className="pt-120">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="works-title section-title style-01">
                                <div className="title-transparent">
                                    <span>In touch</span>
                                </div>
                                <h3 className="subtitle">Get in touch</h3>
                                <h2 className="title"><span>Don&apos;t Hesitate </span> To Contact Us</h2>
                            </div>

                            <div className="quote-info mt-30">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <i className="flaticon-call"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Phone</h4>
                                        <span>+971 4 239 4244</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Email</h4>
                                        <span>info@agarocorp.com</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <i className="flaticon-map-location"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Address</h4>
                                        <span>
                                        AGAROCORP OIL & GAS LLC<br/>
                                        P.O Box 35644
                                        21 Century Building Suite 306<br/>
                                        Abu Baker Al Siddique Rd - Deira<br/>
                                        Dubai - United Arab Emirates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            {/* <div className="request-form xs-mt-30 md-mt-35">
                                <div id="form-messages"></div>
                                <form id="ajax-contact" method="post" action="http://html.iddrak.com/petro/quote-form.php" className="request-page-form" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea id="message" name="message" className="form-control" placeholder="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group submit-btn">
                                                <button className="btn btn-primary">
                                                    <i className="flaticon-right icon-arrow before"></i>
                                                    <span className="label">Submit Request</span>
                                                    <i className="flaticon-right icon-arrow after"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                            <div className="works-img-box mt-30">
                                <img src="images/projects/04.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Get in touch end -->*/}

        {/* Partnership & Group*/}
        <section id="project-section" class="mt-120 fix">
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="project-title section-title style-02 pb-70">
                                <div class="title-transparent">
                                    <span>Partnership</span>
                                </div>
                                <h3 class="subtitle">Partnership</h3>
                            </div>
                        </div>
                        <div class="bg-shape-img">
                            <img src="images/bg-shape.png" alt=""/>
                        </div>
                        <div class="col-xl-12">
                            <div class="project__slider swiper-container">
                                <div className="swiper-button-prev"></div> 
                                <div class="project-wrapper swiper-wrapper">
                                    <div class="project-item swiper-slide">
                                        <div class="overlay"></div>
                                        <div class="content-btn">
                                            <div class="content-btn-text">
                                                <h4 class="title"><a href="https://www.emiratesnbd.com/" target="_blank">Emirates NBD</a></h4>
                                                <span>www.emiratesnbd.com</span>
                                            </div>
                                            <a href="https://www.emiratesnbd.com/" target="_blank"><i class="flaticon-plus"></i></a>
                                        </div>
                                        <div class="image">
                                            <img src="images/partner/emiratenbdlogo.png" alt=""/>
                                        </div>
                                        <div class="content">
                                            <h4 class="title"><a href="https://www.emiratesnbd.com/" target="_blank">Emirates NBD</a></h4>
                                            <span>www.emiratesnbd.com</span>
                                        </div>
                                    </div>
                                    <div class="project-item swiper-slide">
                                        <div class="overlay"></div>
                                        <div class="content-btn">
                                            <div class="content-btn-text">
                                                <h4 class="title"><a href="http://socar.az/" target="_blank">Socar</a></h4>
                                                <span>www.socar.az</span>
                                            </div>
                                            <a href="http://socar.az/" target="_blank"><i class="flaticon-plus"></i></a>
                                        </div>
                                        <div class="image">
                                            <img src="images/partner/socarlogo.png" alt=""/>
                                        </div>
                                        <div class="content">
                                            <h4 class="title"><a href="http://socar.az/" target="_blank">Socar</a></h4>
                                            <span>www.socar.az</span>
                                        </div>
                                    </div>
                                    <div class="project-item swiper-slide">
                                        <div class="overlay"></div>
                                        <div class="content-btn">
                                            <div class="content-btn-text">
                                                <h4 class="title"><a href="https://www.asco.az/" target="_blank">Asco</a></h4>
                                                <span>www.asco.az</span>
                                            </div>
                                            <a href="https://www.asco.az/" target="_blank"><i class="flaticon-plus"></i></a>
                                        </div>
                                        <div class="image">
                                            <img src="images/partner/ascologo.png" alt=""/>
                                        </div>
                                        <div class="content">
                                            <h4 class="title"><a href="https://www.asco.az/" target="_blank">Asco</a></h4>
                                            <span>www.asco.az</span>
                                        </div>
                                    </div>
                                    <div class="project-item swiper-slide">
                                        <div class="overlay"></div>
                                        <div class="content-btn">
                                            <div class="content-btn-text">
                                                <h4 class="title"><a href="https://humi.co.id/" target="_blank">HUMI</a></h4>
                                                <span>www.humi.co.id</span>
                                            </div>
                                            <a href="https://humi.co.id/" target="_blank"><i class="flaticon-plus"></i></a>
                                        </div>
                                        <div class="image">
                                            <img src="images/partner/humilogo.png" alt=""/>
                                        </div>
                                        <div class="content">
                                            <h4 class="title"><a href="https://humi.co.id/" target="_blank">HUMI</a></h4>
                                            <span>www.humi.co.id</span>
                                        </div>
                                    </div>                                                                       
                                </div>     
                                <div className="swiper-button-next"></div>                                                           
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="get-in-touch-section" data-jarallax='{"speed": 0.6}' className="pt-120">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="works-title section-title style-01">
                                <div className="title-transparent">
                                    <span>Group of Companies</span>
                                </div>
                                <h3 className="subtitle">Group of Companies</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="works-img-box mt-30" align="center">
                                <h2 className="title">Chrisca</h2>
                                <img src="images/partner/chriscalogo.png" alt="" width={200}/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="works-img-box mt-30" align="center">
                                <h2 className="title">Souvenir Group of Companies</h2>
                                <img src="images/partner/souvenirlogo.png" alt="" width={200}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*<!-- Oil Price --> */}                  
        <section id="get-in-touch-section" data-jarallax='{"speed": 0.6}' className="pt-120 pb-50">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="works-title section-title style-01">
                                <div className="title-transparent">
                                    <span>Oil Price</span>
                                </div>
                                <h3 className="subtitle">Global Oil Price</h3>
                                <h2 className="title"><span>Daily / Weekly </span> Oil Price Information</h2>
                            </div>
                            <div className="works-img-box mt-30">
                                <img src="images/about.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Futures & Indexes</th><th>Last</th><th>Change</th><th>% Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {oilprice.map((oil) => {
                                    return (
                                        <tr key={oil.id}>
                                            <td>{oil.name}</td>
                                            <td>{oil.last_price}</td>
                                            <td>{Number.parseFloat(oil.change).toFixed(2)}</td>
                                            <td>{oil.change_percent}</td>  
                                        </tr> 
                                    )
                                })}
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <a href="/oilprice" className="btn btn-secondary mt-20 xs-mt-20">
                                        <i className="flaticon-right icon-arrow before"></i>
                                        <span className="label">Show More</span>
                                        <i className="flaticon-right icon-arrow after"></i>
                                    </a>
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

export default dynamic (() => Promise.resolve(Home), {ssr: false})
