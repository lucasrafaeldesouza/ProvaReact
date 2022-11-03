import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Sobre from "../components/Sobre";
import ErrorPage from "../components/ErrorPage";
import FetchNews from "../components/FetchNews";
import { PageLayout } from "../components/PageLayout";
import Home from "../components/Home"

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
      <Route index path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/noticias" element={<FetchNews />} />
      <Route path="/album" element={<Album />} />
      {/* {<Route path="/contato" element={<Contador />} />} */}
      {/* { <Route path="/album" element={<Contador />} />} */}
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};

export default Root;
