import { useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import ProductCard from "../../components/product-cart/product-card";
import "./shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Shop;
