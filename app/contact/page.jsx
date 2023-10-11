import dynamic from "next/dynamic";
const Contact = () => {
    return (
        <>
        <main>
        <div id="banner-section" className="page-title" data-jarallax='{"speed": 0.6}' style={{backgroundImage:`url(images/banner/hero-04.jpg)`}}>
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrubms text-center">
                                <h2 className="title">Contact Us</h2>
                                <ul className="d-flex justify-content-center mt-20">
                                    <li className="mb-20"><a href="/">Home</a></li>
                                    <li> / </li>
                                    <li><span className="active">Contact Us</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        <div id="google-map-section" className="google-map mt-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14432.592634025152!2d55.3299738!3d25.265601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f431cecb970dd%3A0xdec7836113da2f7c!2sAGAROCORP%20OIL%20AND%20GAS%20LLC!5e0!3m2!1sid!2sid!4v1697007878515!5m2!1sid!2sid"
                allowfullscreen="" loading="lazy"></iframe>
        </div>
        </main>
        <script async src="assets/js/main.js"></script>
        <script async src="assets/js/jarallax.min.js"></script>
        </>
    )
}
export default dynamic (() => Promise.resolve(Contact), {ssr: false})
