import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../fakeAPI";
import { SearchBox } from "components/SearchBox/SearchBox";

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name =>
    setSearchParams(name !== "" ? { name } : {});

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />

      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
