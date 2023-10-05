import dynamic from "next/dynamic";
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
                                            <h1>753 <sup>+</sup></h1>
                                            <h4>Project Success</h4>
                                        </div>
                                        <div className="content">
                                            <h1>579 <sup>+</sup></h1>
                                            <h4>Our Equipments</h4>
                                        </div>
                                        <div className="content">
                                            <h1>342 <sup>+</sup></h1>
                                            <h4>Satisfied Clients</h4>
                                        </div>
                                        <div className="content">
                                            <h1>231 <sup>+</sup></h1>
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
                                <h4><span>12 <sup>+</sup></span> Years</h4>
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
                                    <p className="text">Consisting of 7 tanker fleets, we are ready to deliver your fuel needs to every port that can be reached by our fleet throughout ASWP (Any Safe World Port).</p><br/>
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
                                    <h1 className="title"><a href="/">600<sup>+</sup> Completed Deliveries</a></h1>
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
                            <h2 className="title"><span>WE CONSTRUCTED </span>A SECURE EXPERIENCE FOR YOU</h2>
                            <p className="text mt-30">Let’s talk about how we stand No. 01 position in the world!</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">
                                        <div className="icon">
                                            <i className="flaticon-magnifier"></i>
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
                                            <i className="flaticon-checkmark"></i>
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
                                            <i className="flaticon-calendar-1"></i>
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
                                            <i className="flaticon-startup"></i>
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
                                <h2 className="title">EXPERIENCE WORK WITH GLOBAL INDUSTRIES</h2>
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
                                        <span>+9714 239 4244</span>
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
        
        <section className="mt-120">
            <div><img src="images/banner/allship.png"/></div>
        </section>
        {/* <!-- Get in touch end -->

        <!-- project start --> */}
        {/* <section id="project-section" className="mt-120 fix">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="project-title section-title style-02 pb-70">
                                <div className="title-transparent">
                                    <span>Projects</span>
                                </div>
                                <h3 className="subtitle">Projects</h3>
                                <h2 className="title"><span>Let's talk about </span>how we stand no 01 position in the world!</h2>
                            </div>
                        </div>
                        <div className="bg-shape-img">
                            <img src="images/bg-shape.png" alt=""/>
                        </div>
                        <div className="col-xl-12">
                            <div className="project__slider swiper-container">
                                <div className="project-wrapper swiper-wrapper">
                                    <div className="project-item swiper-slide">
                                        <div className="overlay"></div>
                                        <div className="content-btn">
                                            <div className="content-btn-text">
                                                <h4 className="title"><a href="project-single.html">Free Transportation</a></h4>
                                                <span>Gas & Oil</span>
                                            </div>
                                            <a href="project-single.html"><i className="flaticon-plus"></i></a>
                                        </div>
                                        <div className="image">
                                            <img src="images/projects/01.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-single.html">Free Transportation</a></h4>
                                            <span>Gas & Oil</span>
                                        </div>
                                    </div>
                                    <div className="project-item swiper-slide">
                                        <div className="overlay"></div>
                                        <div className="content-btn">
                                            <div className="content-btn-text">
                                                <h4 className="title"><a href="project-single.html">Industrial Equipment</a></h4>
                                                <span>Construction</span>
                                            </div>
                                            <a href="project-single.html"><i className="flaticon-plus"></i></a>
                                        </div>
                                        <div className="image">
                                            <img src="images/projects/02.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-single.html">Industrial Equipment</a></h4>
                                            <span>Construction</span>
                                        </div>
                                    </div>
                                    <div className="project-item swiper-slide">
                                        <div className="overlay"></div>
                                        <div className="content-btn">
                                            <div className="content-btn-text">
                                                <h4 className="title"><a href="project-single.html">Factory Maintain</a></h4>
                                                <span>Industry</span>
                                            </div>
                                            <a href="project-single.html"><i className="flaticon-plus"></i></a>
                                        </div>
                                        <div className="image">
                                            <img src="images/projects/05.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-single.html">Factory Maintain</a></h4>
                                            <span>Industry</span>
                                        </div>
                                    </div>
                                    <div className="project-item swiper-slide">
                                        <div className="overlay"></div>
                                        <div className="content-btn">
                                            <div className="content-btn-text">
                                                <h4 className="title"><a href="project-single.html">Gas & Oil</a></h4>
                                                <span>Chemical</span>
                                            </div>
                                            <a href="project-single.html"><i className="flaticon-plus"></i></a>
                                        </div>
                                        <div className="image">
                                            <img src="images/projects/04.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-single.html">Gas & Oil</a></h4>
                                            <span>Chemical</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- project end -->

        <!-- Blog start --> */}
        {/* <section id="blog-section" className="mt-120">
            <div className="container">
                <div className="row align-items-center mb-30">
                    <div className="col-lg-12">
                        <div className="works-title section-title style-01">
                            <div className="title-transparent">
                                <span>News Blog</span>
                            </div>
                            <h3 className="subtitle">News & Blog</h3>
                            <h2 className="title"><span>Our recent news </span>announcements for our sincere clients</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="blog-block mt-30">
                            <div className="blog-thumb">
                                <a href="blog-single.html"><img src="images/blog/01.jpg" alt=""/></a>
                            </div>
                            <div className="blog-block-content mt-30">
                                <ul className="meta-info d-flex">
                                    <li><a href="blog.html"><i className="fa-solid fa-tags"></i> Industry</a></li>
                                    <li><a href="blog-single.html"><i className="fa-regular fa-comment"></i> Comments(2)</a></li>
                                </ul>
                                <h4 className="title mt-20 mb-20">
                                    <a href="blog-single.html">Construction is a general term meaning the art and science.</a>
                                </h4>
                                <ul className="blog-btn mt-20">
                                    <li className="date"><i className="fa-regular fa-calendar-days"></i> June 24, 2022</li>
                                    <li className="button">
                                        <a href="blog-single.html">Read More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="blog-block mt-30">
                            <div className="blog-thumb">
                                <a href="blog-single.html"><img src="images/blog/02.jpg" alt=""/></a>
                            </div>
                            <div className="blog-block-content mt-30">
                                <ul className="meta-info d-flex">
                                    <li><a href="blog.html"><i className="fa-solid fa-tags"></i> Industry</a></li>
                                    <li><a href="blog-single.html"><i className="fa-regular fa-comment"></i> Comments(2)</a></li>
                                </ul>
                                <h4 className="title mt-20 mb-20">
                                    <a href="blog-single.html">What Are The Benefits Of industrial LEED Certification?</a>
                                </h4>
                                <ul className="blog-btn mt-20">
                                    <li className="date"><i className="fa-regular fa-calendar-days"></i> June 24, 2022</li>
                                    <li className="button">
                                        <a href="blog-single.html">Read More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="blog-block mt-30">
                            <div className="blog-thumb">
                                <a href="blog-single.html"><img src="images/blog/03.jpg" alt=""/></a>
                            </div>
                            <div className="blog-block-content mt-30">
                                <ul className="meta-info d-flex">
                                    <li><a href="blog.html"><i className="fa-solid fa-tags"></i> Industry</a></li>
                                    <li><a href="blog-single.html"><i className="fa-regular fa-comment"></i> Comments(2)</a></li>
                                </ul>
                                <h4 className="title mt-20 mb-20">
                                    <a href="blog-single.html">Latin construction and Old French construction is the verb</a>
                                </h4>
                                <ul className="blog-btn mt-20">
                                    <li className="date"><i className="fa-regular fa-calendar-days"></i> June 24, 2022</li>
                                    <li className="button">
                                        <a href="blog-single.html">Read More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- Blog end --> */}

        </main>
        <script async src="assets/js/main.js"></script>
        <script async src="assets/js/jarallax.min.js"></script>
        </>
    )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
