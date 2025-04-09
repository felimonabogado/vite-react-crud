import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/add" element={<AddUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
} 