import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/Pages/AboutPage";


function App() {
  return (
    <div className="w-full mx-auto bg-gray-50">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
