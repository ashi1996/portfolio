import React from 'react';
import ExperienceItem from './expirience-item/experience-item';
import { ExperienceData } from '../../core/data/experience';
import './experience.css';
import { IExperiance } from '../../core/models/common';

function Experience() {
  return (
    <>
    <div className='experience-Wrapper'>
        <div>
          <h3 className='subTitel' >EXPERIENCE & EDUCATION</h3>
        </div>
        <div className='row'>
          <div className='experience-continer'>
            <div className='experience-box'>
              <ul>
                {
                  ExperienceData.slice(0, 3).map((experience:IExperiance, index: number)=>(
                    <ExperienceItem key={index} experience={experience}/>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className='experience-continer'>
            <div className='experience-box'>
              <ul>
              {
                  ExperienceData.slice(3, 6).map((experience:IExperiance, index: number)=>(
                    <ExperienceItem key={index} experience={experience}/>
                  ))
                }
              </ul>
            </div>
          </div>




          {/* <div className='experience-continer'>2</div> */}
         
        </div>
    </div>
    </>
  );
}

export default Experience;
