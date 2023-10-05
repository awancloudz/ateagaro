import dynamic from "next/dynamic";
const Footer = () => {
    return (
        <>
        {/* <section id="newsletter-section">
            <div className="container mt-120">
                <div className="newsletter">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                            <div className="newsletter-content d-flex">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <div className="content">
                                    <h3>Sign Up to Get Latest Updates</h3>
                                    <p className="text">It is a long established fact that a reader will be distracted by the</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="newsletter-form mt-50">
                                <form action="#">
                                    <input type="email" placeholder="Your email address"/>
                                    <button><i className="flaticon-mail"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <footer id="footer-section" className="footer-area">
            <div className="overlay">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="footer-widget widget mt-50 footer-about">
                                <h3 className="title">About Company</h3>
                                <div className="logo mt-30 mb-30">
                                    <a href="index.html"> <img src="images/logo2.png" alt="footer logo"/></a>
                                </div>
                                <p className="text">WE HAS A PROUD TRADITION OF SERVICE AS A FUEL TRANSPORTER SINCE 2012</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="footer-widget widget mt-50">
                                <h3 className="title">Quick Links</h3>
                                <ul className="mt-20">
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> About Us</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> project</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Services</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> project</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="footer-widget widget mt-50">
                                <h3 className="title">Other Resources</h3>
                                <ul className="mt-20">
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Support</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Privacy Policy</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Terms & Condition</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Services</a></li>
                                    <li><a href="#!"><i className="fa-solid fa-angle-right"></i> Faqs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="footer-widget widget mt-50">
                                <h3 className="title">Recent Posts</h3>
                                <ul className="d-flex mt-20">
                                    <li><img src="images/blog/01.jpg" alt=""/></li>
                                    <li>
                                        <a href="blog-single.html">
                                            <h5>Construction is a general term</h5>
                                        </a>
                                        <span>June 5, 2022</span>
                                    </li>
                                </ul>
                                <ul className="d-flex mt-20">
                                    <li><img src="images/blog/01.jpg" alt=""/></li>
                                    <li>
                                        <a href="blog-single.html">
                                            <h5>Construction is a general term</h5>
                                        </a>
                                        <span>June 5, 2022</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container" align="center">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-6">
                                        <div>
                                            <p className="text"><b>© Copyright 2023 AGAROCORP OIL & GAS LLC</b></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5">
                                        {/* <ul className="footer-social d-flex justify-content-lg-end justify-content-sm-end">
                                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-vimeo-v"></i></a></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
