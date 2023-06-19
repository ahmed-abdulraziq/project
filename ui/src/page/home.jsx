import { Fragment } from "react";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Student from "../component/section/student";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Category />
      <About />
      <Course />
      <Student />
      <Achievement />
    </Fragment>
  );
};

export default Home;
