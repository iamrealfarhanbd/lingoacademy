import SingleCourseAside from "./Aside"

const SingleCourse = () => {
    return (
        <>

      <div className="rs-breadcrumbs breadcrumbs-overlay">
          <div className="breadcrumbs-img">
            <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
          </div>
          <div className="breadcrumbs-text white-color">
            <h1 className="page-title">Learn  User Interface and User Experience</h1>
            <ul>
              <li>
                <a className="active" href="index.html">Home</a>
              </li>
              <li>Course Details</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}            
        {/* Intro Courses */}
        <section className="intro-section gray-bg pt-94 pb-100 md-pt-64 md-pb-70">
          <div className="container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="col-lg-8 md-mb-50">
                {/* Intro Info Tabs*/}
                <div className="intro-info-tabs">
                  <ul className="nav nav-tabs intro-tabs tabs-box" id="myTab" role="tablist">
                    <li className="nav-item tab-btns">
                      <a className="nav-link tab-btn active" id="prod-overview-tab" data-toggle="tab" href="#prod-overview" role="tab" aria-controls="prod-overview" aria-selected="true">Overview</a>
                    </li>
                    <li className="nav-item tab-btns">
                      <a className="nav-link tab-btn" id="prod-curriculum-tab" data-toggle="tab" href="#prod-curriculum" role="tab" aria-controls="prod-curriculum" aria-selected="false">Curriculum</a>
                    </li>
                    <li className="nav-item tab-btns">
                      <a className="nav-link tab-btn" id="prod-instructor-tab" data-toggle="tab" href="#prod-instructor" role="tab" aria-controls="prod-instructor" aria-selected="false">Instructor</a>
                    </li>
                    <li className="nav-item tab-btns">
                      <a className="nav-link tab-btn" id="prod-faq-tab" data-toggle="tab" href="#prod-faq" role="tab" aria-controls="prod-faq" aria-selected="false">Faq</a>
                    </li>
                    <li className="nav-item tab-btns">
                      <a className="nav-link tab-btn" id="prod-reviews-tab" data-toggle="tab" href="#prod-reviews" role="tab" aria-controls="prod-reviews" aria-selected="false">Reviews</a>
                    </li>
                  </ul>
                  <div className="tab-content tabs-content" id="myTabContent">
                    <div className="tab-pane tab fade show active" id="prod-overview" role="tabpanel" aria-labelledby="prod-overview-tab">
                      <div className="content white-bg pt-30">
                        <div className="course-overview">
                          <div className="inner-box">
                            <h4>Educavo Course Details</h4>
                            <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus.</p>
                            <p>Eleifend euismod pellentesque vel Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus.</p>
                            <ul className="student-list">
                              <li>23,564 Total Students</li>
                              <li><span className="theme_color">4.5</span> <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /> (1254 Rating)</li>
                              <li>256 Reviews</li>
                            </ul>
                            <h3>What you’ll learn?</h3>
                            <ul className="review-list">
                              <li>Phasellus enim magna, varius et commodo ut.</li>
                              <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                              <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                              <li>Phasellus enim magna, varius et commodo ut.</li>
                              <li>Phasellus enim magna, varius et commodo ut.</li>
                              <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                              <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                              <li>Phasellus enim magna, varius et commodo ut.</li>
                            </ul>
                            <h3>Requirements</h3>
                            <ul className="review-list">
                              <li>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                              <li>Ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel.</li>
                              <li>Phasellus enim magna, varius et commodo ut.</li>
                              <li>Varius et commodo ut, ultricies vitae velit. Ut nulla tellus.</li>
                              <li>Phasellus enim magna, varius et commodo ut.</li>
                            </ul>                                                                                                          
                          </div>
                        </div>                                                
                      </div>
                    </div>
                    <div className="tab-pane fade" id="prod-curriculum" role="tabpanel" aria-labelledby="prod-curriculum-tab">
                      <div className="content">
                        <div id="accordion" className="accordion-box">
                          <div className="card accordion block">
                            <div className="card-header" id="headingOne">
                              <h5 className="mb-0">
                                <button className="btn btn-link acc-btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">UI/ UX Introduction</button>
                              </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                              <div className="card-body acc-content current">
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a className="popup-videos play-icon" href="https://www.youtube.com/watch?v=atMUy_bPoQI"><i className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play"><i className="ripple" /></span>What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card accordion block">
                            <div className="card-header" id="headingTwo">
                              <h5 className="mb-0">
                                <button className="btn btn-link acc-btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Color Theory</button>
                              </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                              <div className="card-body acc-content">
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play"><i className="ripple" /></span>What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card accordion block">
                            <div className="card-header" id="headingThree">
                              <h5 className="mb-0">
                                <button className="btn btn-link acc-btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Basic Typography</button>
                              </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                              <div className="card-body acc-content">
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play"><i className="ripple" /></span>What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>                                             
                      </div>
                    </div>
                    <div className="tab-pane fade" id="prod-instructor" role="tabpanel" aria-labelledby="prod-instructor-tab">
                      <div className="content pt-30 pb-30 pl-30 pr-30 white-bg">
                        <h3 className="instructor-title">Instructors</h3>
                        <div className="row rs-team style1 orange-color transparent-bg clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                            <div className="team-item">
                              <img src="assets/images/team/1.jpg" alt="" />
                              <div className="content-part">
                                <h4 className="name"><a href="#">Jhon Pedrocas</a></h4>
                                <span className="designation">Professor</span>
                                <ul className="social-links">
                                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>                                                            
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="team-item">
                              <img src="assets/images/team/2.jpg" alt="" />
                              <div className="content-part">
                                <h4 className="name"><a href="#">Jhon Pedrocas</a></h4>
                                <span className="designation">Professor</span>
                                <ul className="social-links">
                                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>                                                            
                        </div>  
                      </div>
                    </div>
                    <div className="tab-pane fade" id="prod-faq" role="tabpanel" aria-labelledby="prod-faq-tab">
                      <div className="content">
                        <div id="accordion3" className="accordion-box">
                          <div className="card accordion block">
                            <div className="card-header" id="headingSeven">
                              <h5 className="mb-0">
                                <button className="btn btn-link acc-btn" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">UI/ UX Introduction</button>
                              </h5>
                            </div>
                            <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven" data-parent="#accordion3">
                              <div className="card-body acc-content current">
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a className="popup-videos play-icon" href="https://www.youtube.com/watch?v=atMUy_bPoQI"><i className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play"><i className="ripple" /></span>What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card accordion block">
                            <div className="card-header" id="headingEight">
                              <h5 className="mb-0">
                                <button className="btn btn-link acc-btn collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">Color Theory</button>
                              </h5>
                            </div>
                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion3">
                              <div className="card-body acc-content">
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play"><i className="ripple" /></span>What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card accordion block">
                            <div className="card-header" id="headingNine">
                              <h5 className="mb-0">
                                <button className="btn btn-link acc-btn collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">Basic Typography</button>
                              </h5>
                            </div>
                            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion3">
                              <div className="card-body acc-content">
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play"><i className="ripple" /></span>What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="popup-videos play-icon"><span className="fa fa-play" />What is UI/ UX Design?</a>
                                    </div>
                                    <div className="pull-right">
                                      <div className="minutes">35 Minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>                                              
                      </div>
                    </div>
                    <div className="tab-pane fade" id="prod-reviews" role="tabpanel" aria-labelledby="prod-reviews-tab">
                      <div className="content pt-30 pb-30 white-bg">
                        <div className="cource-review-box mb-30">
                          <h4>Stephane Smith</h4>
                          <div className="rating">
                            <span className="total-rating">4.5</span> <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" />  256 Reviews
                          </div>
                          <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                          <div className="helpful">Was this review helpful?</div>
                          <ul className="like-option">
                            <li><i className="fa fa-thumbs-o-up" /></li>
                            <li><i className="fa fa-thumbs-o-down" /></li>
                            <li><a className="report" href="#">Report</a></li>
                          </ul>
                        </div>
                        <div className="cource-review-box mb-30">
                          <h4>Anna Sthesia</h4>
                          <div className="rating">
                            <span className="total-rating">4.5</span> <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" />  256 Reviews
                          </div>
                          <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                          <div className="helpful">Was this review helpful?</div>
                          <ul className="like-option">
                            <li><i className="fa fa-thumbs-o-up" /></li>
                            <li><i className="fa fa-thumbs-o-down" /></li>
                            <li><a className="report" href="#">Report</a></li>
                          </ul>
                        </div>
                        <div className="cource-review-box mb-30">
                          <h4>Petey Cruiser</h4>
                          <div className="rating">
                            <span className="total-rating">4.5</span> <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" />  256 Reviews
                          </div>
                          <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                          <div className="helpful">Was this review helpful?</div>
                          <ul className="like-option">
                            <li><i className="fa fa-thumbs-o-up" /></li>
                            <li><i className="fa fa-thumbs-o-down" /></li>
                            <li><a className="report" href="#">Report</a></li>
                          </ul>
                        </div>
                        <div className="cource-review-box">
                          <h4>Rick O'Shea</h4>
                          <div className="rating">
                            <span className="total-rating">4.5</span> <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" />  256 Reviews
                          </div>
                          <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                          <div className="helpful">Was this review helpful?</div>
                          <ul className="like-option">
                            <li><i className="fa fa-thumbs-o-up" /></li>
                            <li><i className="fa fa-thumbs-o-down" /></li>
                            <li><a className="report" href="#">Report</a></li>
                          </ul>
                          <a href="#" className="more">View More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           <SingleCourseAside />
                                      
            </div>                
          </div>
        </section>
        </>
    )
}

export default SingleCourse;