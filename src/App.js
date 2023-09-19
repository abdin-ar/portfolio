import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToLink from "./components/primitives/router/ScrollToLink";
import Layout from "./components/sections/layout/Layout";
import Home from "./components/pages/Home";
import Terms from "./components/pages/Terms";
import Error from "./components/pages/Error";

/**
 * @type {React.FC}
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToLink scrollPaddingTop={true} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
