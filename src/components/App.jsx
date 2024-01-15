import { Route, Routes } from "react-router-dom";
// import { About } from "../pages/About";
// import { Home } from "../pages/Home";
// import { ProductDetails } from "../pages/ProductDetails";
// import { Products } from "../pages/Products";
import { Container } from "./App.styled";
// import { Mission } from "./Mission";
// import { Team } from "./Team";
// import { Reviews } from "./Reviews";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Mission = lazy(() => import("./Mission"));
const Team = lazy(() => import("./Team"));
const Reviews = lazy(() => import("./Reviews"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Container>
  );
};
