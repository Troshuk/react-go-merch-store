import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./App.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
