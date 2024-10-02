import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
      <div>
        <Header handleSideBar={handleSideBar} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
