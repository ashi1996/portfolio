import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from '../../forms/button/button';
import RoofingIcon from '@mui/icons-material/Roofing';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import './nav-bar.css';
import { useAppSelector } from '../../../app/hooks';
import { appPages } from '../../../core/models/appPages';

// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     isMobile?: string;
//   }
// }


const NavBar = () => {
  const { darkMode } = useAppSelector(state=> state.appState);

  return (
    <nav className='nav' data-dark={darkMode}> 
      <ul >
         <NavLink to={appPages.home}>
            {({ isActive, isPending }) => (
              <li ><Button label='HOME' isActive={isActive}><RoofingIcon/></Button></li>
            )}
        </NavLink> 
         <NavLink to={appPages.about}>
            {({ isActive, isPending }) => (
               <li ><Button label='ABOUT' isActive={isActive}><Person2OutlinedIcon/></Button></li>
            )}
        </NavLink> 
         <NavLink to={appPages.portfolio}>
            {({ isActive, isPending }) => (
             <li ><Button label='PORTFOLIO' isActive={isActive}><BusinessCenterOutlinedIcon/></Button></li>
            )}
        </NavLink>
         <NavLink to={appPages.contact}>
            {({ isActive, isPending }) => (
              <li ><Button label='CONTACT' isActive={isActive}><DraftsOutlinedIcon/></Button></li>
            )}
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;