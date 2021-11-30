const Testimonial = () => {
    return (
        <>
        <div className="rs-testimonial home9-style pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 sm-mb-40">
              <div className="image-part js-tilt">
                <img src="assets/images/testimonial/style9/1.png" alt="images" />
              </div>
            </div> 
            <div className="col-lg-6 pl-65 md-pl-15 col-md-6">
              <div className="img-part mb-30">
                <img src="assets/images/testimonial/style9/2.png" alt="images" />
              </div>
              <div className="rs-carousel owl-carousel" data-loop="true" data-items={1} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="true" data-nav="false" data-nav-speed="false" data-md-device={1} data-md-device-nav="false" data-md-device-dots="true" data-center-mode="false" data-ipad-device2={1} data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-ipad-device={1} data-ipad-device-nav="false" data-ipad-device-dots="true" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false">
                <div className="testi-item">
                  <div className="item-content">
                    <p>Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis iste natus error sit vo luptatem. Education is the passport to the future for tomorrow belongs</p>
                    <div className="testi-information">
                      <div className="name">Mahadi Mansura</div>
                      <span className="designation"> CSE Student</span>
                    </div>
                  </div>           
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Testimonial;