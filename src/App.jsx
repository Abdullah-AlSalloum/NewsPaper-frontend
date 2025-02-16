import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import SecondaryNavBar from "./components/secondaryNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <SecondaryNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
