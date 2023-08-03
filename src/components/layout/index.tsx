import React, {useEffect, useLayoutEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Header from './header/header';
import NavBar from './nav-bar/nav-bar';
import './layout.css';
import { useAppSelector } from '../../app/hooks';
import useSendMail from '../../core/hooks/useSendMail';
import { EmailTemplates } from '../../services/email-js/email-js.model';
import AddReview from '../add-review/add-review';

function Layout() {

  const location = useLocation();
  const { darkMode, magicWand } = useAppSelector(state => state.appState);
  const { sendExecute } = useSendMail(EmailTemplates.wiewSite);

  useEffect(() => {
    sendExecute({newTemplateParams: { label : EmailTemplates.wiewSite.label } , sendJustOneTime: true})
  }, []);


  useEffect(() => {
    const bannerCanvas = document.getElementById('canvas_banner');
    if (bannerCanvas) {
      bannerCanvas.style.visibility = magicWand ? 'visible' : 'hidden';
    }
  }, [magicWand]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
  <>
    <div className='layout' data-dark={darkMode} data-magic-wand-active={magicWand}>
        <Header/>
        <main className='container'>
          <Outlet/>
        </main>
        <NavBar/>
    </div>
    <AddReview />
  </>
  );
}

export default Layout;
