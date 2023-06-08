import React from 'react';
import { useAppSelector } from '../../app/hooks';
import './flip-card.css';

type Props = {
    children:  JSX.Element,
    label : string
}

function FlipCard({children, label} : Props) {

  const { darkMode } = useAppSelector(state => state.appState);

  return (
    <div className="flip-card">
        <div className="face face--front">{children}</div>
        <div className="face face--back" data-dark={darkMode}>{label}</div>
  </div>
  );
}

export default FlipCard;
