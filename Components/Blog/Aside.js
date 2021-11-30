const AllBlogAside = () => {
    return (
        <>
            <div className="col-lg-4 col-md-12 order-last">
                <div className="widget-area">
                  <div className="search-widget mb-50">
                    <div className="search-wrap">
                      <input type="search" placeholder="Searching..." name="s" className="search-input" defaultValue />
                      <button type="submit" value="Search"><i className=" flaticon-search" /></button>
                    </div>
                  </div>
                  <div className="recent-posts mb-50">
                    <h3 className="widget-title">Recent Posts</h3>
                    <ul>
                      <li><a href="#">University while the lovely valley team work</a></li>
                      <li><a href="#">High school program starting soon 2021</a></li>
                      <li><a href="#">Modern School the lovely valley team work</a></li>
                      <li><a href="#">While the lovely valley team work</a></li>
                      <li><a href="#">This is a great source of content for anyone…</a></li>
                    </ul>
                  </div>
                  <div className="widget-archives mb-50">
                    <h3 className="widget-title">Archives</h3>
                    <ul>
                      <li><a href="#">September 2020</a></li>
                      <li><a href="#">September 2020</a></li>
                    </ul>
                  </div>   
                  <div className="widget-archives mb-50">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li><a href="#">College</a></li>
                      <li><a href="#">High School</a></li>
                      <li><a href="#">Primary</a></li>
                      <li><a href="#">School</a></li>
                      <li><a href="#">University</a></li>
                    </ul>
                  </div>
                  <div className="recent-posts mb-50">
                    <h3 className="widget-title">Meta</h3>
                    <ul>
                      <li><a href="#">Log in</a></li>
                      <li><a href="#">Entries feed</a></li>
                      <li><a href="#">Comments feed</a></li>
                      <li><a href="#">WordPress.org</a></li>
                    </ul>
                  </div>
                </div>
              </div>
        </>
    )

}

export default AllBlogAside