import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './header/header';
import NavBar from './nav-bar/nav-bar';
import './layout.css';
import { useAppSelector } from '../../app/hooks';

function Layout() {

  const { darkMode } = useAppSelector(state => state.appState);

  return (
    <div className='layout' data-dark={darkMode}>
        <Header/>
        <main className='container'>
          <Outlet/>
        </main>
        <NavBar/>
    </div>

  );
}

export default Layout;
