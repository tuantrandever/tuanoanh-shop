import React from "react";

import category1 from "../../assets/anh-phu-kien.jpg";
import category2 from "../../assets/vay-2.jpg";
import category3 from "../../assets/anh-trang-suc.png";
import category4 from "../../assets/anh-my-pham.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Accessories", path: "accessories", image: category1 },
    { name: "Dress Collection", path: "dress", image: category2 },
    { name: "Jewellery", path: "jewellery", image: category3 },
    { name: "Cosmetics", path: "cosmetics", image: category4 },
  ];
  return (
    <>
      <div className="product__grid">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.path}`}
            className="categories__card"
          >
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
