import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout';
import { appPages } from './core/models/appPages';
import NotFound from './sections/404/404';
import AboutPage from './sections/about/about';
import ContactPage from './sections/contact/contact';
import HomePage from './sections/home/home';
import PortfolioPage from './sections/portfolio/portfolio';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path={appPages.home} element={<Layout />}>
          <Route index 
            element={
              <>
                <HomePage />
                <AboutPage />
                <PortfolioPage />
                <ContactPage />
              </>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;