import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-cart/product-card";
import { CategoryContext } from "../../context/categories.context";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducst] = useState([]);

  useEffect(() => {
    setProducst(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
