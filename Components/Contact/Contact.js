const ContactPage = () => {
    return (
        <>
            <div className="rs-breadcrumbs breadcrumbs-overlay">
          <div className="breadcrumbs-img">
            <img src="assets/images/breadcrumbs/5.jpg" alt="Breadcrumbs Image" />
          </div>
          <div className="breadcrumbs-text white-color padding">
            <h1 className="page-title">Contact 3</h1>
            <ul>
              <li>
                <a className="active" href="index.html">Home</a>
              </li>
              <li>Contact 3</li>
            </ul>
          </div>
        </div>
        <div className="contact-page-section orange-color pt-100 pb-100 md-pt-70 md-pb-70">
          <div className="container">
            <div className="row align-items-center pb-50">
              <div className="col-lg-4 md-mb-50">
                <div className="contact-address-section style2">                            
                  <div className="contact-info mb-15 md-mb-30">
                    <div className="icon-part">
                      <i className="fa fa-home" />
                    </div>
                    <div className="content-part">
                      <h5 className="info-subtitle">Address</h5>
                      <h4 className="info-title">228-5 Main Street,<br />Georgia, USA </h4>
                    </div>
                  </div>
                  <div className="contact-info mb-15 md-mb-30">
                    <div className="icon-part">
                      <i className="fa fa-envelope-open-o" />
                    </div>
                    <div className="content-part">
                      <h5 className="info-subtitle">Email Address</h5>
                      <h4 className="info-title"><a href="mailto:info@rstheme.com">info@rstheme.com</a></h4>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="icon-part">
                      <i className="fa fa-headphones" />
                    </div>
                    <div className="content-part">
                      <h5 className="info-subtitle">Phone Number</h5>
                      <h4 className="info-title"><a href="tel+0885898745">(+088)589-8745</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-map">
                  <iframe src="https://maps.google.com/maps?q=Fort%20Miley&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
            </div>
            <div className="row align-items-end contact-bg1">
              <div className="col-lg-4 md-pt-50 lg-pr-0">
                <div className="contact-image">
                  <img src="assets/images/contact/2.png" alt="Contact Images" />
                </div>
              </div>
              <div className="col-lg-8 lg-pl-0">
                <div className="rs-quick-contact new-style">
                  <div className="inner-part mb-35">
                    <h2 className="title mb-15">Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod
                      tempor incidi dunt ut dolore.</p>
                  </div>
                  <div id="form-messages" />
                  <form id="contact-form" method="post" action="mailer.php">
                    <div className="row">
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="name" name="name" placeholder="Name" required />
                      </div> 
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="email" name="email" placeholder="Email" required />
                      </div>   
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone" required />
                      </div>   
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="subject" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-lg-12 mb-40">
                        <textarea className="from-control" id="message" name="message" placeholder=" Message" required defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <input className="btn-send" type="submit" defaultValue="Submit Now" />
                    </div>       
                  </form>
                </div> 
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default ContactPage;