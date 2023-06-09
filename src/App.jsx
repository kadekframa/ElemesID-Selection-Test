/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatergoryReceipt from "./components/CatergoryReceipt";
import HeroSection from "./components/HeroSection";
import TrendingReceipt from "./components/TrendingReceipt";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  const [data, setData] = useState(false);
  const [status, setStatus] = useState(true);
  const [indexLimit, setIndexLimit] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      getData();
      setStatus(false);
    }
    console.info(data);
  }, [data, setData, status]);

  const getData = () => {
    const response = fetch("../data.json", {
      method: "GET",
    });

    response
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        setTimeout(() => {
          setData(value.data);
        }, 400);
      });
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
      <Header />

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
      <BottomNavbar />
    </>
  );
}

export default App;
