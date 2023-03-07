import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToLink from "./components/router/ScrollToLink";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Error from "./pages/Error";

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
