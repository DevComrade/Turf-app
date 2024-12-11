import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const SellerPanel = ({pages}) => {
  return (
    <div>
      <Header />
      {pages}
      <Footer />
    </div>
  );
};

export default SellerPanel;
