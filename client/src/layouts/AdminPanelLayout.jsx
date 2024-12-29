import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanelLayout = () => {
  return (
    <>
      <AdminNavbar />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default AdminPanelLayout;
