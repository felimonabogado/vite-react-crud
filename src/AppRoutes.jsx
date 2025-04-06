import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import SingleUser from "./pages/SingleUser";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:slug" element={<SingleUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}