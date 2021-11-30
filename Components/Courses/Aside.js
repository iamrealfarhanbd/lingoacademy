const SingleCourseAside = () => {
    return (
        <>
            <div className="video-column col-lg-4">
                <div className="inner-column">
                  <div className="intro-video media-icon orange-color2">
                    <img className="video-img" src="assets/images/about/about-video-bg2.png" alt="Video Image" />
                    <a className="popup-videos" href="https://www.youtube.com/watch?v=atMUy_bPoQI">
                      <i className="fa fa-play" />
                    </a>
                    <h4>Preview this course</h4>
                  </div>
                  <div className="course-features-info">
                    <ul>
                      <li className="lectures-feature">
                        <i className="fa fa-files-o" />
                        <span className="label">Lectures</span>
                        <span className="value">3</span>
                      </li>
                      <li className="quizzes-feature">
                        <i className="fa fa-puzzle-piece" />
                        <span className="label">Quizzes</span>
                        <span className="value">0</span>
                      </li>
                      <li className="duration-feature">
                        <i className="fa fa-clock-o" />
                        <span className="label">Duration</span>
                        <span className="value">10 week </span>
                      </li>
                      <li className="students-feature">
                        <i className="fa fa-users" />
                        <span className="label">Students</span>
                        <span className="value">21</span>
                      </li>
                      <li className="assessments-feature">
                        <i className="fa fa-check-square-o" />
                        <span className="label">Assessments</span>
                        <span className="value">Yes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-part">
                    <a href="#" className="btn readon2 orange">$35</a>
                    <a href="#" className="btn readon2 orange-transparent">Buy Now</a>
                  </div>
                </div>
              </div>
        </>
    )
}

export default SingleCourseAside;