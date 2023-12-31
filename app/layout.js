import './globals.css'
import { Inter } from 'next/font/google'
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/all.min.css'
import './assets/css/fontawesome.min.css'
import './assets/fonts/flaticon.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/swiper-bundle.css'
import './assets/css/backtotop.css'
import './assets/css/style.css'
import './assets/css/skeleton.scss'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AGAROCORP OIL & GAS LLC',
  description: 'We Trade & Transporting Energy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <title>AGAROCORP OIL & GAS LLC - We Trade & Transporting Energy</title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script async src="assets/js/jquery-2.2.4.min.js"></script>
        <script async src="assets/js/popper.min.js"></script>
        <script async src="assets/js/bootstrap.min.js"></script>
        <script async src="assets/js/wow.min.js"></script>
        <script async src="assets/js/owl.carousel.min.js"></script>
        <script async src="assets/js/waypoints.min.js"></script>
        <script async src="assets/js/quote-form.js"></script>
        <script async src="assets/js/swiper-bundle.js"></script>
        <script async src="assets/js/backtotop.js"></script>        
        <script async src="assets/js/counterup.min.js"></script>
      </head>
      <body className={inter.className} id="default-home">
        <Navbar />
        {children}
        <Footer/>
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <i className="fa-solid fa-arrow-up-long"></i>
        </div>
        <div className="preloader" id="preloader">
          <div className="preloader-inner">
              <div className="center">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <hr/>
          </div>
        </div>
      </body>
    </html>
  )
}
