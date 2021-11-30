import Head from 'next/head'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Layout = ({children}) => {
    return (
        <>
       <Head>
        <meta charSet="utf-8" />
        <title>Educavo Index 10 - Education HTML Template</title>
        <meta name="description" content />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/fav.png" />
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/slick.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/off-canvas.css" />
        <link rel="stylesheet" type="text/css" href="assets/fonts/linea-fonts.css" />
        <link rel="stylesheet" type="text/css" href="assets/fonts/flaticon.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/rsmenu-main.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/rs-spacing.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
        <script src="assets/js/modernizr-2.8.3.min.js"></script>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/rsmenu-main.js"></script> 
        <script src="assets/js/jquery.nav.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/slick.min.js"></script>
        <script src="assets/js/isotope.pkgd.min.js"></script>
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/skill.bars.jquery.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>        
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/jquery.mb.YTPlayer.min.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/tilt.jquery.min.js"></script>           
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/contact.form.js"></script>
        <script src="assets/js/main.js"></script>
        </Head>
         <Header />
        {children}
        <Footer />

        </>
    )
}


export default Layout;
