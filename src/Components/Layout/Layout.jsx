import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
