import "./App.css";
import NavScroll from "./Navbar";
import Home from "./Home";
import Footer from "./footer";
import OurProducts from "./OurProducts";
import MoreData from "./MoreData";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import CategoryPage from "./CategoryPage";
import SearchPage from "./SearchPage";
import SignUp from "./SignUp";
import ShoppingCart from "./ShoppingCart";
import { Toaster } from "react-hot-toast";
import AboutPage from "./AboutUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavScroll />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<OurProducts />} />
        <Route path="/product/:id" element={<MoreData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
