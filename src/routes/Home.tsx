import React from "react";
//components
import Navbar from "../components/home/Navbar";
import Sidebar from "../components/home/Sidebar";

const Home = () => {
  return (
    <div className="home w-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
