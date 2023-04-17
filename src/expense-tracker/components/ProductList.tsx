import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    setProducts(["Clothing", "Household"]);
  }, []);
  return <div>Product List</div>;
};

export default ProductList;
