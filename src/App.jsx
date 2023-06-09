/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatergoryReceipt from "./components/CategoryReceipt";
import HeroSection from "./components/HeroSection";
import TrendingReceipt from "./components/TrendingReceipt";
import BottomNavbar from "./components/BottomNavbar";
import dataReceipt from "./data/dataReceipt";

function App() {
  const [data, setData] = useState(false);
  const [status, setStatus] = useState(true);
  const [indexLimit, setIndexLimit] = useState(8);
  const [loading, setLoading] = useState(false);
  const [navbarColour, setNavbarColour] = useState(false);
  const [bottomNavbarDisplay, setBottomNavbarDisplay] = useState(false);

  useEffect(() => {
    if (status) {
      getData();
      setStatus(false);
    }
    console.info(data);

    const displayNavbar = () => {
      console.info(window.scrollY);
      if (window.scrollY > 210) {
        setNavbarColour(true);
        setBottomNavbarDisplay(true);
      } else {
        setNavbarColour(false);
        setBottomNavbarDisplay(false);
      }
    };

    window.addEventListener("scroll", () => {
      displayNavbar();
    });
  }, [data, setData, status]);

  const getData = () => {
    const response = dataReceipt.data;
    setData(response);
  };

  const handleAllReceipt = () => {
    if (indexLimit === data.length) {
      alert("All data trending receipt have displayed. Enjoy your day! :)");
    } else {
      setLoading(true);
      setTimeout(() => {
        setIndexLimit(data.length);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <Header navbarColour={navbarColour} />

      {/* Hero */}
      <HeroSection />

      {/* Receipt Category */}
      <CatergoryReceipt />

      {/* Receipt Trending */}
      <TrendingReceipt
        data={data}
        indexLimit={indexLimit}
        loading={loading}
        handleAllReceipt={handleAllReceipt}
      />

      {/* Footer */}
      <Footer />

      {/* Bottom Navbar */}
      <BottomNavbar bottomNavbarDisplay={bottomNavbarDisplay} />
    </>
  );
}

export default App;
