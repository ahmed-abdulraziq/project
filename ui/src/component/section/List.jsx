import React, { Fragment } from "react";
import useFetch from "../../useFetch/useFetch";

const List = ({ reFetch }) => {
  const { data, loading } = useFetch(`https://apiflask.up.railway.app/show`);
  return (
    <Fragment>
      {loading && <h1>loading</h1>}
      {data &&
        data.map((v, i) => {
          return (
            <div className="csa-body" key={i}>
              <ul className="lab-ul">
                <li>
                  <div id="accordion">
                    <div className="card active bg-ash mb-1">
                      <div
                        className="card-header bg-transparent border-bottom-0"
                        id={"acc-list-" + i}
                      >
                        <h5 className="mb-0">
                          <button
                            className="w-100 border-0 bg-transparent outline-none text-left"
                            data-bs-toggle="collapse"
                            data-bs-target={"#acc-" + i}
                            aria-expanded="true"
                            aria-controls={"acc-" + i}
                          >
                            Seation {i + 1}
                            <span className="d-block font-weight-normal">
                              Videos: 13 | 26:00 Min
                            </span>
                            <div className="icon">
                              <i className="icofont-thin-down"></i>
                            </div>
                          </button>
                        </h5>
                      </div>
                      <div
                        id={"acc-" + i}
                        className="collapse show"
                        aria-labelledby="acc-list-1"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body py-0">
                          {v.lesson.map((item, index) => (
                            <div
                              onClick={() => {
                                reFetch(
                                  `https://apiflask.up.railway.app/show/${item.id}`
                                );
                                localStorage.setItem("show", `${item.id}`);
                              }}
                              className="course-lists d-flex flex-wrap justify-content-between"
                              key={index}
                            >
                              <div className="csa-left">
                                <h6>
                                  {i +
                                    1 +
                                    " . " +
                                    (index + 1) +
                                    " " +
                                    item.title}
                                </h6>
                                <p>
                                  <i className="icofont-play-alt-2"></i>
                                  {item.time}
                                </p>
                              </div>
                            </div>
                          ))}
                          <div
                            onClick={() =>
                              reFetch(
                                `https://apiflask.up.railway.app/ques/${v.ques}`
                              )
                            }
                            className="course-lists d-flex flex-wrap justify-content-between"
                          >
                            <div className="csa-left">
                              <h6>ques</h6>
                              <p>10 ques</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
    </Fragment>
  );
};

export default List;
