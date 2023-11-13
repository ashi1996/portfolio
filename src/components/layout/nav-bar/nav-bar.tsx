import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../forms/button/button';
import RoofingIcon from '@mui/icons-material/Roofing';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import './nav-bar.css';
import { useAppSelector } from '../../../app/hooks';
import { appPages, appSectionsIds } from '../../../core/models/appPages';

// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     isMobile?: string;
//   }
// }

import { Link } from "react-scroll";

const NavBar = () => {
  const { darkMode } = useAppSelector(state => state.appState);
  const nav = useNavigate()
  
  const navList = [
    {
      _id: appSectionsIds.home,
      BUTTON:  <Button label='HOME' ><RoofingIcon /></Button>,
    },
    {
      _id: appSectionsIds.about,
      BUTTON:  <Button label='ABOUT' ><Person2OutlinedIcon /></Button>,
    },
    {
      _id: appSectionsIds.portfolio,
      BUTTON:  <Button label='PORTFOLIO'><BusinessCenterOutlinedIcon /></Button>,
    },
    {
      _id: appSectionsIds.contact,
      BUTTON:  <Button label='CONTACT'><DraftsOutlinedIcon /></Button>,
    },
  ]

  const returnHome = (id: string) => {
    if(window.location.pathname !== '/'){
      nav(`/`);
    }
  }

  return (
    <nav className='nav' data-dark={darkMode}>
      <ul >
        {
          navList.map((navItem:any, key:number) => (
            <li key={navItem._id}>
              <Link
                onClick={()=>returnHome(navItem._id)}
                activeClass="b_active"
                to={navItem._id}
                spy={true}
                smooth={true}
                // offset={10}
                duration={500}
                saveHashHistory={false}
              >
                {navItem.BUTTON}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default NavBar;