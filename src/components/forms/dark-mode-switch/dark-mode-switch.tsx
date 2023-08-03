import React from 'react';
import './dark-mode-switch.css';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleDarkMode } from '../../../features/app-store/appSlice';

function DarkModeSwitch() {
    const dispatch = useAppDispatch()
    const { darkMode } = useAppSelector(state=> state.appState);

  return (
    <div className='switch-container'>
        <input type="checkbox" id="darkmode-toggle" checked={darkMode}  onChange={()=>{}}/>
        <label htmlFor="darkmode-toggle" onClick={()=> dispatch(toggleDarkMode())}>
            <DarkModeOutlinedIcon className=" i moon"/>
            <WbSunnyOutlinedIcon className="i sun"/>
        </label>
    </div>
  );
}

export default DarkModeSwitch;
