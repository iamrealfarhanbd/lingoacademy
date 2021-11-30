import Image from "next/image";
import { useState, useEffect } from "react";

const BlogCard = ({ post }) => {
  const [thumbnail, setThumbnail] = useState("/assets/img/1500x700.png");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [published, setPublished] = useState(post.date);
  async function getThumbnail() {
    const response = await fetch(
      `https://trainingexpress.org.uk/wp-json/wp/v2/media/${post.featured_media}`
    );
    const json = await response.json();
    setThumbnail(json.source_url);
    const date = new Date(post.date);
    const day = date.getDate();
    const month = months[date.getMonth() - 1];
    const year = date.getFullYear();
    setPublished(`${month} ${day}, ${year}`);
  }
  useEffect(() => {
    getThumbnail();
  }, []);
  const createHTML = (htmlElements) => {
    return { __html: htmlElements };
  };
  return (
    <div className="col-lg-12 mb-70">
      <div className="blog-item">
        <div className="blog-img">
          <a href="#">
            <Image src={thumbnail} width={1200} height={700} />
          </a>
        </div>
        <div className="blog-content">
          <h3 className="blog-title">
            <a href="#">{post.title.rendrered}</a>
          </h3>
          <div className="blog-meta">
            <ul className="btm-cate">
              <li>
                <div className="blog-date">
                  <i className="fa fa-calendar-check-o" /> {published}
                </div>
              </li>
              <li>
                <div className="author">
                  <i className="fa fa-user-o" /> admin
                </div>
              </li>
              <li>
                <div className="tag-line">
                  <i className="fa fa-book" />
                  <a href="#">University</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="blog-desc">
            <div
              dangerouslySetInnerHTML={createHTML(post.excerpt.rendered)}
            ></div>
          </div>
          <div className="blog-button">
            <a className="blog-btn" href="#">
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
