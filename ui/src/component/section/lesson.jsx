import React, { Fragment, useRef, useState } from "react";

const Lesson = ({ data }) => {
  const [icon, setIcon] = useState(false);
  const [play, setPlay] = useState(false);

  const playRef = useRef(0);
  return (
    <Fragment>
      <div className="video-part mb-4 mb-lg-0">
        <div className="vp-title mb-4">
          <h3>{data.title}</h3>
        </div>
        <div className="vp-video mb-4">
          <video ref={playRef} controls className="">
            <source  src={data.video} type="video/mp4" />
          </video>
          <div className={`lesson-div ${play ? "d-none" : ""}`}>
            <img src={`assets/images/lesson/nlp${data.id}.jpeg`} alt="" className="lesson-img" />
            <button
              onClick={() => {
                setPlay(!play)
                playRef.current.play()
                }}
              className="video-button popup lesson-btn"
              target="_blank"
            >
              <i className="icofont-ui-play"></i>
            </button>
          </div>
        </div>
        <div className={`content-wrapper ${icon ? "open" : ""}`}>
          <div className="content-icon d-lg-none" onClick={() => setIcon(!icon)}>
            <i className="icofont-caret-down"></i>
          </div>
          <div className="vp-content mb-5">
            <h4 className="text-end">{data["sub-title"]}</h4>
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Lesson;
