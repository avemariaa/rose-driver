import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import History from "../pages/History";
import NewOrder from "../pages/NewOrder";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/History" element={<History />} />
      <Route path="NewOrder" element={<NewOrder />} />
    </Routes>
  );
};

export default Routers;
