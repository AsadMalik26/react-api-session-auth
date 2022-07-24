import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/NotFound";
import Products from "./components/products/Products";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import RegisterPage from "./components/Login-signup/Register";
import LoginPage from "./components/Login-signup/Login";
//Router handling
// Wrap full application in Router
//Switch - used to tell the path and load component against the path
function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <h1>React API</h1>
        <div style={{ paddingLeft: "20px" }}>
          <Routes>
            {/* old method - above: Switch instead of Routes- below: component instead of element */}
            <Route path="/products/update/:id" element={<UpdateProduct />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
