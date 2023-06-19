import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";
import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseView from "./page/course-view";
import Home from "./page/home";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="course-view" element={<CourseView />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
