import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/layout';
import { appPages } from './core/models/appPages';
import NotFound from './pages/404/404';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import HomePage from './pages/home/home';
import PortfolioPage from './pages/portfolio/portfolio';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path={appPages.home} element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path={appPages.about} element={<AboutPage/>} />
          <Route path={appPages.portfolio} element={<PortfolioPage/>} />
          <Route path={appPages.contact} element={<ContactPage/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;