import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import TermsPrompt from "../../primitives/other/TermsPrompt";
import Main from "../../primitives/layout/Main";

/**
 * @type {React.FC}
 */
const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <SiteFooter />
      <TermsPrompt />
    </>
  );
};

export default Layout;
