import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPanelLayout from "./layouts/AdminPanelLayout";
import AddBook from "./pages/AddBook";
import UserPage from "./pages/UserPage";
import DeletePage from "./pages/DeletePage";
import UpdateBook from "./pages/UpdateBook";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<AdminPanelLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/books-admin" element={<Books />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/delete" element={<DeletePage />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
