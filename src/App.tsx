import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const Services = lazy(() => import("./pages/servicesPage/Services"));
const InteriorDesing = lazy(
  () => import("./pages/interiorDesing/InteriorDesing")
);
const Construction = lazy(() => import("./pages/construction/Construction"));
const ProjectDevelopment = lazy(
  () => import("./pages/projectDevelopment/ProjectDevelopment")
);
const Repairs = lazy(() => import("./pages/repair/Repair"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Project = lazy(() => import("./pages/project/Project"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const Positions = lazy(() => import("./pages/positions/Positions"));
const News = lazy(() => import("./pages/news/News"));
const SinglePost = lazy(() => import("./pages/singlePost/SinglePost"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Services/Interior" element={<InteriorDesing />} />
            <Route path="/Services/Construction" element={<Construction />} />
            <Route
              path="/Services/Development"
              element={<ProjectDevelopment />}
            />
            <Route path="/Services/Repairs" element={<Repairs />} />
            <Route path="/Work" element={<Portfolio />} />
            <Route path="/Work/:ID" element={<Project />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/About/Positions" element={<Positions />} />
            <Route path="/News" element={<News />} />
            <Route path="/News/:ID" element={<SinglePost />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
};
