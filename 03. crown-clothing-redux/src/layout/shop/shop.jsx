import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import "./shop.scss";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
