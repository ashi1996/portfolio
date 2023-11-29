import React, {useEffect, useLayoutEffect, useRef} from 'react';
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
  const { sendExecute } = useSendMail(EmailTemplates.viewSite);

  const handleUserInteraction = (() => {
   
    const listener = {
      add_listeners : () => {
        window.addEventListener('mousemove', _listener_cb);
        window.addEventListener('keydown', _listener_cb);
        window.addEventListener('click', _listener_cb);
      }, 
      remove_listeners : () => {
        window.removeEventListener('mousemove', _listener_cb);
        window.removeEventListener('keydown', _listener_cb);
        window.removeEventListener('click', _listener_cb);
      }
    }

    const _listener_cb = () => {
      // console.log('User interacted with the site.');
      sendExecute({newTemplateParams: { label : EmailTemplates.viewSite.label } , sendJustOneTime: true})
      listener.remove_listeners();
    };

    return listener;
  })()

  useEffect(() => {
    handleUserInteraction.add_listeners();     // Event listeners for user interactions
    return () => {
      handleUserInteraction.remove_listeners(); // Clean up event listeners when component unmounts
    };
  }, []);


  // useEffect(() => {
  //   sendExecute({newTemplateParams: { label : EmailTemplates.viewSite.label } , sendJustOneTime: true})
  // }, []);


  useEffect(() => {
    const bannerCanvas = document.getElementById('canvas_banner');
    if (bannerCanvas) {
      bannerCanvas.style.visibility = magicWand ? 'visible' : 'hidden';
    }
  }, [magicWand]);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
  <>
    <div className='layout' data-dark={darkMode} data-magic-wand-active={magicWand}>
        <Header/>
        <main className='container' >
          <Outlet />
        </main>
        <NavBar />
    </div>
    <AddReview />
  </>
  );
}

export default Layout;
