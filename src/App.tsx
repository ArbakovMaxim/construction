import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
};

// export default App;
