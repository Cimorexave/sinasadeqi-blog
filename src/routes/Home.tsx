import React, { useState } from "react";
//components
import Navbar from "../components/home/Navbar";
import Sidebar from "../components/home/Sidebar";

const Home = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  return (
    <div className="home w-screen">
      <Navbar setSidebarIsOpen={setSidebarIsOpen} />
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
    </div>
  );
};

export default Home;
