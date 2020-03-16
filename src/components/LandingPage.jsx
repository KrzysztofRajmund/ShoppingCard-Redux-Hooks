import React from "react";

//components
import PromotionSlide from "./PromotionSlide";
import ProductsDisplay from "./ProductsDisplay";

const LandingPage = props => {
  return (
    <>
      <PromotionSlide />
      <ProductsDisplay />
    </>
  );
};

export default LandingPage;
