import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom'
import Header from './header/header';
import NavBar from './nav-bar/nav-bar';
import './layout.css';
import { useAppSelector } from '../../app/hooks';

function Layout() {

  const { darkMode, magicWand } = useAppSelector(state => state.appState);

  useEffect(() => {
    const bannerCanvas = document.getElementById('canvas_banner');
    if (bannerCanvas) {
      bannerCanvas.style.visibility = magicWand ? 'visible' : 'hidden';
    }
  }, [magicWand]);

  return (
    <div className='layout' data-dark={darkMode} data-magicWand-active={magicWand}>
        <Header/>
        <main className='container'>
          <Outlet/>
        </main>
        <NavBar/>
    </div>

  );
}

export default Layout;
