import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BlogsPage from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
import ArticlesPage from './pages/ArticlesPage/Index';
import NotFoundPage from './pages/NotFounPage';
import RegistrationPage from './pages/RegistrationPage';
import Layout from './components/Layout';
import './App.scss'
import ActivationPage from './pages/ActivationPage';

function App() {
  return (
    <Routes>
      <Route element = {<Layout />}>
        <Route path = '/' element = {<Navigate replace to = '/login'/>} />
        <Route path = '/login' element = {<LoginPage/>} />
        <Route path = '/registration' element = {<RegistrationPage/>} />
        <Route path = '/blogs' element = {<BlogsPage/>} />
        <Route path = '/articles' element = {<ArticlesPage/>} />
        <Route path='/blog/:id' element ={<BlogPage />}/>
        <Route path='/activate/:uid/:token' element ={<ActivationPage/>}/>
        <Route path = '*' element = {<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
