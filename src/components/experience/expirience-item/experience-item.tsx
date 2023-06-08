import  Badge  from '../../badge/badge';
import React from 'react';
import './experience-item.css';
import Button from '../../forms/button/button';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { IExperiance } from '../../../core/models/common';
import { useAppSelector } from '../../../app/hooks';
interface Props {
  experience : IExperiance
}

function ExperienceItem({ experience : {description, duration, img, header : { subTitel ,titel}}} :Props) {

  const { darkMode } = useAppSelector(state => state.appState);

  return (
    <>
        <li className='experiance-item'>
          <div className='experiance-icon'>
           {img}
          </div>
          <Badge label={duration} customCss={{  padding: "7px 10px"}}/>
          <h5 className='titel' >
            {titel}
           <span data-dark={darkMode}>{subTitel}</span>
           </h5>
          <p data-dark={darkMode}>{description}</p>
        </li>
    </>
  );
}

export default ExperienceItem;
