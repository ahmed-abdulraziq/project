import React, { Fragment, useState } from "react";
import axios from "axios";

const Ques = ({ data, id, reFetch }) => {
  const [ques, setQues] = useState(true);

  const check = async (e) => {
    e.preventDefault();

    let arr = [];
    for (let i = 0; i < e.target.length - 1; i++) {
      arr.push(e.target[i].value);
    }

    axios.post(`https://ques2.up.railway.app/check/${id}`, { arr }).then((i) => {
      (i.data.answer.length <= 5) && reFetch(`https://ques2.up.railway.app/ques/${id}`);
      (i.data.answer.length > 5) && setQues(!ques);
    });
  };
  return (
    <Fragment>
      <div className="video-part my-4 mb-lg-0">
        {ques ? (
          <form onSubmit={(e) => check(e)}>
            {data &&
              data.map((item, index) => (
                <div key={index} className="my-3">
                  <label className="mb-2 fs-5" for={"ques-" + index}>
                    {item}
                  </label>
                  <input id={"ques-" + index} type="text" placeholder="" />
                </div>
              ))}
            <button type="submit">send</button>
          </form>
        ) : (
          <div>
            <h1>للأسف هناك الكثير من الأخطاء</h1>
            <button
              type="submit"
              onClick={() => reFetch(`https://ques2.up.railway.app/ques/${id}`)}
            >
              Resend
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Ques;
