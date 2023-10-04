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
                                    <li className="mb-20"><a href="index.html">Home</a></li>
                                    <li> / </li>
                                    <li><span className="active">Contact Us</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="google-map-section" className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.152902325514!2d-73.92586068490252!3d40.69263004673777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c109e3838ab%3A0xdd0808f04a387b40!2sBushwick%20Ave%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2ssa!4v1635597580164!5m2!1sen!2ssa"
                allowfullscreen="" loading="lazy"></iframe>
        </div>

        <section id="contact-section" className="contact-area mt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title style-01">
                            <h4 className="subtitle">CONTACT US</h4>
                            <h2 className="title"><span>Leave us a message,</span> we'll be in touch.</h2>
                            <p className="text mt-30">There are many variations of passages of lorem ipsum available the majority have alteration in some form by injected humour. Many variations of passages of lorem ipsum available the majority have alteration in some form by
                                injected humour.
                            </p>
                        </div>
                        <div className="contact-social d-flex mt-30">
                            <h6>Follow us: </h6>
                            <ul className="d-flex">
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-vimeo-v"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="comment-form-wrap xs-mt-35 md-mt-35">
                            <div id="form-messages"></div>
                            <form id="ajax-contact" method="post" action="http://html.iddrak.com/petro/contact-form.php" className="comment-form contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group xs-mt-30">
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mt-30">
                                            <input type="text" id="subject" name="subject" className="form-control" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group textarea mt-30">
                                            <textarea id="message" name="message" rows="5" className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="comment-btn mt-30">
                                            <button className="btn btn-primary">
                                                <i className="flaticon-right icon-arrow before"></i>
                                                <span className="label">Send Message</span>
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
        </section>
        </main>
        <script async src="assets/js/main.js"></script>
        <script async src="assets/js/jarallax.min.js"></script>
        </>
    )
}
export default dynamic (() => Promise.resolve(Contact), {ssr: false})
