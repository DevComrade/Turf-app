import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const CustomerPanel = ({pages}) => {
  return (
    <div>
      <Header />
      {pages}
      <Footer />
    </div>
  );
};

export default CustomerPanel;
