import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import './header.css';
import {toggleMagicWand ,toggleDarkMode, toggleI18 } from '../../../features/app-store/appSlice';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../../forms/dark-mode-switch/dark-mode-switch';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

function Header() {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch()
  const {magicWand ,darkMode, language } = useAppSelector(state=> state.appState);


  const changeLanguage = () => {
    dispatch(toggleI18());
    i18n.changeLanguage(language);
  }

  const turnOnWand = () => {
    dispatch(toggleMagicWand()); 
    if(magicWand){
      // @ts-ignore
      window.multipleSplats(parseInt(Math.random() * 20) + 5)
    }
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
          <div className='wand-container' data-magic-wand-active={magicWand} onClick={turnOnWand}>
            <AutoFixHighOutlinedIcon  />
          </div>
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