import React, { Fragment } from "react";
import List from "../component/section/List";
import Lesson from "../component/section/lesson";
import useFetch from "../useFetch/useFetch";
import Ques from "../component/section/ques";

const CourseView = () => {
  let show = localStorage.getItem("show") || 0;
  const { data, loading, reFetch } = useFetch(
    `https://ques2.up.railway.app/show/${show}`
  );
  return (
    <Fragment>
      <div className="course-view-section padding-tb section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="course-view">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-12 text-end my-4">
                    {loading && <h1>loading</h1>}
                    {loading ||
                      (data.type == "lesson" ? (
                        <Lesson data={data.data} />
                      ) : data.type == "ques" ? (
                        <Ques data={data.data} id={data.id} reFetch={reFetch} />
                      ) : data.type == "full" ? (
                        <h3> أحسنت لقد تجوزة الامتحان بدون أى أخطاء </h3>
                      ) : data.type == "notes" ? (
                        <div>
                          <h3>
                            أحسنت لقد تجوزة الامتحان ولكن هناك بعض الملاحظات
                          </h3>
                          {data.data.map((i) => (
                            <p key={i}>
                              <b>ملاحظه </b> {i}
                            </p>
                          ))}
                        </div>
                      ) : (
                        ""
                      ))}
                  </div>
                  <div className="col-lg-4 col-sm-8 col-12">
                    <div className="video-list-area">
                      <div className="video-body">
                        <div className="course-select-area border-radius-12">
                          <div className="csa-title mb-4">
                            <h5>Course Requirements</h5>
                          </div>
                          <List reFetch={reFetch} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseView;
