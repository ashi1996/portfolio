import React from 'react';
import { CSSProperties } from 'react';
import './badge.css';

type Props = {
    // children: JSX.Element
    customCss?: CSSProperties | undefined,
    label : string
}

function Badge({label, customCss} : Props) {
  return (
    <span className='badge' style={customCss ? customCss : {} }>{label}</span>
  );
}

export default Badge;
