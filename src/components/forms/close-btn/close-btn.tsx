import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import './close-btn.css';

interface IButton {
    action : ()=>void
}

function CloseBtn( { action=()=>{}} : IButton) {

  return (
    <div className="close-container" onClick={()=>action()}>
        <div className="leftright"></div>
        <div className="rightleft"></div>
  </div>
  );
}

export default CloseBtn;
