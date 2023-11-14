import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import './button.css';

interface IButton {
    children : any,
    label?: string | undefined | null,
    isActive?: boolean,
    outline?:boolean,
    action ?: ()=>void,
    dataPulse ?: boolean
}

function Button( { children, label,  isActive=false, outline=false, action=()=>{},  dataPulse} : IButton) {

  const {darkMode} = useAppSelector(state => state.appState);

  return (
    <div className='btnWrraper' data-outline={outline} data-pulse={dataPulse} onClick={()=> action()}>
      {outline && <div className='titleWrapper'>{label}</div>}
      <div className={'button ' +(( isActive ) ? 'active' : '')} data-label={outline ? ' ' : label} data-dark={darkMode} >
          {children}
      </div>
    </div>
  );
}

export default Button;
