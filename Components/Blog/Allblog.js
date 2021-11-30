import AllBlogAside from "../Blog/Aside";
import BlogCard from "./BlogCard";
const AllBlog = ({ posts }) => {
  return (
    <>
      <div className="rs-breadcrumbs breadcrumbs-overlay">
        <div className="breadcrumbs-img">
          <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
        </div>
        <div className="breadcrumbs-text white-color">
          <h1 className="page-title">Blog</h1>
          <ul>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="rs-inner-blog orange-color pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="row">
            <AllBlogAside />

            <div className="col-lg-8 pr-50">
              <div className="row">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlog;
