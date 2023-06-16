import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import './button.css';

interface IButton {
    children : any,
    label?: string | undefined | null,
    isActive?: boolean,
    outline?:boolean,
    action ?: ()=>void
}

function Button( { children, label,  isActive=false, outline=false, action=()=>{}} : IButton) {

  const {darkMode} = useAppSelector(state => state.appState);

  return (
    <div className='btnWrraper' data-outline={outline} onClick={()=> action()}>
      {outline && <div className='titelWrapper'>{label}</div>}
      <div className={'button ' +(( isActive ) ? 'active' : '')} data-label={outline ? ' ' : label} data-dark={darkMode} >
          {children}
      </div>
    </div>
  );
}

export default Button;
