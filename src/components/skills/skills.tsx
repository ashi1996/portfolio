import React from 'react';
import { SkillsData } from '../../core/data/skills';
import { ISkill } from '../../core/models/common';
import FlipCard from '../flip-card/flip-card';
import './skills.css';

function Skills() {
  return (
    <>
     <div className='my-skills'>
        <div>
          <h3 className='subTitel' >my skills</h3>
        </div>
        <div className='skillsSection'>
          { SkillsData.map((itemSkill : ISkill, index : number)=> (
            <FlipCard label={itemSkill.titel} key={index}> 
              <div className={'imgSkillWrapper'}>
                <div className='imgBackgroundContainer ' >
                  <img src={itemSkill.img} className='imgSkills'/>
                </div>
            </div>
          </FlipCard>
          ))}
        </div>
    </div>
  </>
  );
}

export default Skills;
