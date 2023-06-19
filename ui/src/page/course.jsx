import { Fragment } from "react";
import { Link } from "react-router-dom";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";

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

const CoursePage = () => {
  return (
    <Fragment>
      <GroupSelect />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-6 of 10 results</p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <SkillSelect select={"all"} />
                    <div className="select-icon">
                      <i className="icofont-rounded-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                          <div className="course-cate">{val.cate}</div>
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
                            <i className="icofont-video-alt"></i>{" "}
                            {val.totalLeson}
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
            <Pagination />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursePage;
