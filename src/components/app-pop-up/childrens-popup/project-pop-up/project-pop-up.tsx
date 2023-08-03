
import React, {useState} from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { IProject } from '../../../../core/models/common';
import Badge from '../../../badge/badge';
import TypingBoard from '../../../TypingBoard/typingBoard';
import PopUp from '../../pop-up/pop-up';
import './project-pop-up.css';

type Props = {
  isOpen:boolean
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
  project:IProject
}

function ProjectPopup({ isOpen, setIsOpen, project : {description, img, link, tags, titel }} : Props) {

  const { darkMode } = useAppSelector(state => state.appState);

  return (
    <PopUp isOpen={isOpen} setIsOpen={setIsOpen} popUpId='project'>
      <div className='project-pop-up'>
            <h2>{titel}</h2>
            <div className='pop-up-body'>
              <div className='description'>
                <p>{description}</p>
              </div>
              <div className='img-wrapper'>
                 <img src={img} />
              </div>
              <div className='link' >
                <a href={link} target='_blank' data-dark={darkMode}>take me to site</a>
              </div>

              <div className='badge-wrapper' >
                  {
                      tags.map((tag, i) =>(
                          <Badge key={i} customCss={{margin: '4px', padding:'7px 12px', textTransform:'uppercase', background:'var(--warning)' , fontWeight:'600' }} label={tag}/>
                      ))
                  }
              </div>
            </div>
      </div>

    </PopUp>  
  );
}

export default ProjectPopup;
