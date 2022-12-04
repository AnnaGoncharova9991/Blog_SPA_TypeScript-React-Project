import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import ArticlesPage from "./pages/ArticlesPage/Index";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFounPage";
import RegistrationPage from "./pages/RegistrationPage";
import Layout from "./components/Layout";
import "./App.scss";
import ActivationPage from "./pages/ActivationPage";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/activate/:uid/:token" element={<ActivationPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<PersistLogin />} >
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />                   
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
