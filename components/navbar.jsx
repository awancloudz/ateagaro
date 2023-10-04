import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
    return (
        <>
        <header id="header-sticky" className="header-area style-01">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="header-top-notice d-flex justify-content-end">
                                <p>Welcome To Agaro Tri Energi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="logo-wrapper">
                                <a href="/" className="logo"><img src="images/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                            <div className="header-middle-right d-flex justify-content-end">
                                <ul className="header-middle-left-call d-flex align-items-center">
                                    <li><i className="flaticon-operator"></i></li>
                                    <li>
                                        <div className="header-info">
                                            <h5>Contact</h5>
                                            <span>(+62) 21 2297 8900</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="header-middle-right-call d-flex align-items-center">
                                    <li><i className="flaticon-mail"></i></li>
                                    <li>
                                        <div className="header-info">
                                            <h5>Send Us Email</h5>
                                            <span>info@agarocorp.com</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="header-middle-right-call d-flex align-items-center">
                                    <li><i className="flaticon-clock"></i></li>
                                    <li>
                                        <div className="header-info">
                                            <h5>Working time</h5>
                                            <span>Monday - Saturday: 9am - 5pm</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-navigation">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="header-main-menu">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-12 d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                                        <div className="logo-wrapper">
                                            <a href="/" className="logo"><img src="images/logo-2.png" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-2 col-12">
                                        <div className="header-content">

                                            <a className="header-toggle-menu" href="#0" title="Menu"><i className="fa fa-bars"></i></a>

                                            <nav className="header-nav-wrap">
                                                <h2 className="header-nav-heading h6">Site Navigation</h2>
                                                <ul className="header-nav">
                                                    <li><a href="/" className="active" title="Home">Home</a></li>
                                                    <li><a href="/about" title="about">About</a></li>
                                                    <li><a href="/contact" title="contact">Contact</a></li>
                                                    {/* <li className="has-children">
                                                        <a href="#0" title="">Pages</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="about.html">About</a></li>
                                                            <li><a href="team.html">Team</a></li>
                                                            <li><a href="faq.html">Faq</a></li>
                                                            <li><a href="404.html">Error 404</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-children">
                                                        <a href="#0" title="">Services</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="services.html">Service</a></li>
                                                            <li><a href="service-single.html">Service Single</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-children">
                                                        <a href="#0" title="">project</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="projects.html">project</a></li>
                                                            <li><a href="project-single.html">project Single</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-children">
                                                        <a href="#0" title="">Blog</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog.html">Blog Post</a></li>
                                                            <li><a href="blog-single.html">Blog Single</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html" title="">Contact</a></li> */}
                                                </ul>
                                                <a href="#0" title="Close Menu" className="header-overlay-close close-mobile-menu">Close</a>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-7 col-12">
                                        <div className="header-info-icons d-none d-md-block">
                                            <ul className="d-flex justify-content-end">
                                                {/* <li>
                                                    <div id="myOverlay" className="overlay">
                                                        <span className="closebtn" onClick="closeSearch()" title="Close Overlay">×</span>
                                                        <div className="overlay-content">
                                                            <form action="#">
                                                                <input type="text" placeholder="Search.." name="search"/>
                                                                <button type="submit"><i className="fa fa-search"></i></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <button className="openBtn" onClick="openSearch()"><i className="fas fa-search"></i></button>
                                                </li> */}
                                                <li>
                                                    <Link href="/" className="btn btn-primary xs-mt-35">
                                                        <i className="flaticon-right icon-arrow before"></i>
                                                        <span className="label">KC GROUP HOME</span>
                                                        <i className="flaticon-right icon-arrow after"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})
