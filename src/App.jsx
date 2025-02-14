import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Compare from "./Pages/Compare";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Login";
import MyAccount from "./Pages/MyAccount";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import Shop from "./Pages/Shop";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Wishlist from "./Pages/Wishlist";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Category from "./Pages/Category";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import DeliveryPolicy from "./Pages/DeliveryPolicy";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./ScrollToTop";
import ThankYou from "./Pages/ThankYou";
const App = () => {
  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/thank-you" element={<ThankYou/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/product/:title" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:name" element={<Category/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/return-policy" element={<ReturnPolicy/>} />
        <Route path="/delivery-policy" element={<DeliveryPolicy/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;