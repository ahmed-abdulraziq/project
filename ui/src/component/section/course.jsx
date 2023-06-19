import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const courseList = [
  {
    imgUrl: "assets/images/course/01.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "Free",
    cate: "Natural Language Processing",
    reviewCount: "03 reviews",
    title: "Fundamentals of Natural Language Processing Theory Learn New",
    totalLeson: "8x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "Read More",
  },
];

const Course = () => {
  return (
    <div className="course-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
            {courseList.map((val, i) => (
              <div className="col" key={i}>
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="course-content">
                      <div className="course-price">{val.price}</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{val.cate}</a>
                        </div>
                        <div className="course-reiew">
                          <Rating />
                          <span className="ratting-count">
                            {" "}
                            {val.reviewCount}
                          </span>
                        </div>
                      </div>
                      <Link to="/course-view">
                        <h4>{val.title}</h4>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> {val.totalLeson}
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> {val.schdule}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
