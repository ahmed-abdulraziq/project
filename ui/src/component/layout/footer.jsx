import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";

const Footer = () => {
  return (
    <div className="news-footer-wrap">
      <div className="news-letter">
        <div className="fs-shape">
          <img
            src="assets/images/shape-img/03.png"
            alt="fst"
            className="fst-1"
          />
          <img
            src="assets/images/shape-img/04.png"
            alt="fst"
            className="fst-2"
          />
        </div>

        <div className="container">
          <div className="section-wrapper">
            <div className="news-title">
              <h3>{newsTitle}</h3>
            </div>
            <div className="news-form">
              <form action="/">
                <div className="nf-list">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <input type="submit" name="submit" value="Subscribe Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-bottom style-2">
          <div className="container">
            <div className="section-wrapper">
              <p>
                &copy; {new Date().getFullYear()} <Link to="/">NLP Course</Link>{" "}
                Designed by{" "}
                <a
                  href="https://themeforest.net/user/CodexCoder"
                  target="_blank"
                >
                  Ahmed_AbdelRazek
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
