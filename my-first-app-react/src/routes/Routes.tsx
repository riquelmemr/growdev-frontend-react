import React from "react";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;