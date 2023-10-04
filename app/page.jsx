import dynamic from "next/dynamic";
const Home = () => {
    return (
        <>
        <main>
        {/* <!-- Hero start --> */}
        <section id="hero-section-one" className="hero-slider hero-slider-one style-01">
            <div className="hero-bg-01" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/hero/hero-01.jpg)`}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="hero-content-one">
                                    <span className="subtitle">Gas & Oil Industry</span>
                                    <h1 className="title">Best Industrial <span>Company</span></h1>
                                    <div className="hero-btn mt-50 xs-mt-30">
                                        <a href="service-single.html" className="btn btn-secondary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Read More</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                        <a href="services.html" className="btn btn-primary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Services</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg-01" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/hero/hero-02.jpg)`}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content-one">
                                    <span className="subtitle">Gas & Oil Industry</span>
                                    <h1 className="title">Best Industrial <span>Company</span></h1>
                                    <div className="hero-btn mt-50 xs-mt-30">
                                        <a href="service-single.html" className="btn btn-secondary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Read More</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                        <a href="services.html" className="btn btn-primary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Services</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg-01" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/hero/hero-03.jpg)`}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="hero-content-one">
                                    <span className="subtitle">Gas & Oil Industry</span>
                                    <h1 className="title">Best Industrial <span>Company</span></h1>
                                    <div className="hero-btn mt-50 xs-mt-30">
                                        <a href="service-single.html" className="btn btn-secondary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Read More</span>
                                            <i className="flaticon-right icon-arrow after"></i>
                                        </a>
                                        <a href="services.html" className="btn btn-primary xs-mt-10">
                                            <i className="flaticon-right icon-arrow before"></i>
                                            <span className="label">Services</span>
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
                                    <div className="d-flex benifits-content-detl">
                                        <div className="heading">
                                            <h3>Our Clients <span> Benifits</span></h3>
                                        </div>
                                        <div className="content">
                                            <h3>24/7</h3>
                                            <h4>Direct Support</h4>
                                        </div>
                                        <div className="content">
                                            <h3>30 Days</h3>
                                            <h4>Gurantee</h4>
                                        </div>
                                        <div className="content">
                                            <h3>Life time</h3>
                                            <h4>Free Transportation</h4>
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
                                <span>About us</span>
                            </div>
                            <h3 className="subtitle">About Us</h3>
                            <h2 className="title"><span>Since 2010 we are </span> achiving no. 01 position arround the world.</h2>
                            <p className="text mt-30">It is a long established fact that a reader will be distracted by the readable content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Please upgrade
                                your browser to improve your experience and security.</p>
                        </div>
                        <div className="row xs-mt-20">
                            <div className="col-lg-4 col-md-4">
                                <div className="about-info mt-50 xs-mt-20">
                                    <div className="icon">
                                        <i className="flaticon-engine"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Quality assurance</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="about-info mt-50 xs-mt-20">
                                    <div className="icon">
                                        <i className="flaticon-gas"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">World Experts </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="about-info active mt-50 xs-mt-20">
                                    <div className="icon">
                                        <i className="flaticon-carpenter"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Activities </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <a href="about.html" className="btn btn-secondary mt-60 xs-mt-20">
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
                                <img src="images/about.jpg" alt="about image"/>
                            </div>
                            <div className="content">
                                <h4><span>15</span> Years</h4>
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
                                    <span>Services</span>
                                </div>
                                <h3 className="subtitle">Services</h3>
                                <h2 className="title"><span>Best services</span> we are providing for our clients </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-block style-01 mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-leak"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="service-single.html">Gas Filtering</a></h4>
                                    <p className="text">Agrecultural Loan provide low interest many variations of passages have some.</p>
                                </div>
                                <div className="service-btn mt-30">
                                    <a href="service-single.html">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-block style-01 active mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-gas"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="service-single.html">Oil Resourcing</a></h4>
                                    <p className="text">Agrecultural Loan provide low interest many variations of passages have some.</p>
                                </div>
                                <div className="service-btn mt-30">
                                    <a href="service-single.html">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-block style-01 mt-30">
                                <div className="shape-1"></div>
                                <div className="icon">
                                    <i className="flaticon-helmet"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="title"><a href="service-single.html">Project Management</a></h4>
                                    <p className="text">Agrecultural Loan provide low interest many variations of passages have some.</p>
                                </div>
                                <div className="service-btn mt-30">
                                    <a href="service-single.html">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Service end -->

        <!-- Client start --> */}
        <section id="client-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="client-active mt-30">
                            <div className="client">
                                <img src="images/clients/01.png" alt=""/>
                            </div>
                            <div className="client">
                                <img src="images/clients/02.png" alt=""/>
                            </div>
                            <div className="client">
                                <img src="images/clients/03.png" alt=""/>
                            </div>
                            <div className="client">
                                <img src="images/clients/04.png" alt=""/>
                            </div>
                            <div className="client">
                                <img src="images/clients/05.png" alt=""/>
                            </div>
                            <div className="client">
                                <img src="images/clients/06.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Client end -->

        <!-- Works start --> */}
        <section id="works-section" className="xs-mt-100 md-mt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="works-title section-title style-01">
                            <div className="title-transparent">
                                <span>Works</span>
                            </div>
                            <h3 className="subtitle">works</h3>
                            <h2 className="title"><span>We've constructed </span> a secure & personalised experience</h2>
                            <p className="text mt-30">It is a long established fact that a reader will be distracted by the readable content your browser to improve your experience and security.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">.01</span>
                                    <h4 className="title">Spet one title</h4>
                                    <p className="text">Petro will helps to make contact with a perfect deal.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="works-block mt-40">
                                    <span className="works-subtitle">.02</span>
                                    <h4 className="title">Step two title</h4>
                                    <p className="text">Petro will helps to make contact with a perfect deal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="works-img-box">
                            <img src="images/works.jpg" alt=""/>
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

        <!-- Call to start --> */}
        <section id="call-to-section" data-jarallax='{"speed": 0.6}' className="mt-120">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-content text-center">
                                <span className="subtitle">Let's talk with us </span>
                                <h2 className="title mt-20 mb-20">Petro is ready to go with you.</h2>
                                <h5>Street 10, 85 Washington DC, USA</h5>
                                <div className="call-to-btn mt-30">
                                    <a href="contact.html" className="btn btn-secondary">
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
        </section>
        {/* <!-- Call to end -->

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
                                <h2 className="title"><span>Let's talk about </span>improving your business marketing</h2>
                                <p className="text mt-30">It is a long established fact that a reader will be distracted by the readable content sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Please upgrade your browser to improve your experience and security.</p>
                            </div>

                            <div className="quote-info mt-30">
                                <div className="d-flex align-items-center">
                                    <div className="icon">
                                        <i className="flaticon-avatar"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Get a free consultation</h4>
                                        <span>+880 666 5248 321</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="request-form xs-mt-30 md-mt-35">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Get in touch end -->

        <!-- project start --> */}
        <section id="project-section" className="mt-120 fix">
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
        </section>
        {/* <!-- project end -->

        <!-- Blog start --> */}
        <section id="blog-section" className="mt-120">
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
        </section>
        {/* <!-- Blog end --> */}

        </main>
        <script async src="assets/js/main.js"></script>
        <script async src="assets/js/jarallax.min.js"></script>
        </>
    )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
