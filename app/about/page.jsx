import dynamic from "next/dynamic";
const About = () => {
  return (
    <>
    <main>
    <div id="banner-section" className="page-title" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/banner/hero-04.jpg)`}}>
        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrubms text-center">
                            <h2 className="title">About Us</h2>
                            <ul className="d-flex justify-content-center mt-20">
                                <li className="mb-20"><a href="index.html">Home</a></li>
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
                            <span>About us</span>
                        </div>
                        <h3 className="subtitle">About Us</h3>
                        <h2 className="title"><span>Since 2010 we are </span> achiving no. 01 position arround the world.</h2>
                        <p className="text mt-30">It is a long established fact that a reader will be distracted by the readable content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Please upgrade
                            your browser to improve your experience and security.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="about-info mt-50">
                                <div className="icon">
                                    <i className="flaticon-engine"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">Quality assurance</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="about-info mt-50">
                                <div className="icon">
                                    <i className="flaticon-gas"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">World Experts </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="about-info active mt-50">
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
                            <a href="about.html" className="btn btn-secondary mt-60 xs-mt-35">
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

    <section id="call-to-section" data-jarallax='{"speed": 0.6}' className="mt-120">
        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="call-to-content text-center">
                            <span className="subtitle">Lets talk with us </span>
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

    <section id="works-section" className="xs-mt-100 md-mt-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="works-title section-title style-01">
                        <div className="title-transparent">
                            <span>Works</span>
                        </div>
                        <h3 className="subtitle">works</h3>
                        <h2 className="title"><span>Weve constructed </span> a secure & personalised experience</h2>
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
                            <h2 className="title"><span>Lets talk about </span>improving your business marketing</h2>
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
                            <form id="ajax-contact" method="post" action="http://html.iddrak.com/petro/quote-form.php" className="request-page-form" novalidate="novalidate">
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
    </main>
    <script async src="assets/js/main.js"></script>
    <script async src="assets/js/jarallax.min.js"></script>
    </>
  )
}

export default dynamic (() => Promise.resolve(About), {ssr: false})
