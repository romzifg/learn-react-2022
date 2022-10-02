import { useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";
import "./shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <div className="shop-caontainer">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
