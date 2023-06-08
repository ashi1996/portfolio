import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import './header.css';
import { toggleDarkMode, toggleI18 } from '../../../features/app-store/appSlice';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../../forms/dark-mode-switch/dark-mode-switch';

function Header() {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch()
  const { darkMode, language } = useAppSelector(state=> state.appState);


  const changeLanguage = () => {
    dispatch(toggleI18());
    i18n.changeLanguage(language);
  }

  return (
    <header> 
      
      {/* <div className='darkBtnContainer' onClick={()=> dispatch(toggleDarkMode())}>
        {
          darkMode ? 
          <WbSunnyOutlinedIcon/> :
          <DarkModeOutlinedIcon/>
        }
      </div> */}
      {/* <div className='darkBtnContainer' >
         <DarkModeSwitch />
      </div> */}
      <div className='darkBtnContainer' >
         <DarkModeSwitch />
         
      </div>
      {/* <span onClick={changeLanguage} >
        {
          <DarkModeOutlinedIcon/>
        }
      </span> */}
     
    </header>
  );
}

export default Header;