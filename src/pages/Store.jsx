// src/pages/Store.jsx
import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import DownloadAppSection from "../components/DownloadAppSection";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <div className="bg-[#fdf6ec] min-h-screen">
      <ProductCarousel />
      <ProductCarousel /> {/* second summer collection */}

      {/* Download App Section */}
      <DownloadAppSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Store;
