import { useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
