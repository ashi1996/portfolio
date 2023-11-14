import React from 'react';
import { Link } from 'react-scroll';
import { SkillsData } from '../../core/data/skills';
import { ISkill } from '../../core/models/common';
import FlipCard from '../flip-card/flip-card';
import './scroll-to-indicator.css';

interface Props {
  link?: string,
  dir?: string,
  hideInMobile?: boolean
}

function ScrollToIndicator({ dir, link='' , hideInMobile=true}: Props) {
  return (
    <>
      {
        link ? (
          <Link
            to={link}
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="scrollDown" data-link={link} data-mobile-hide={hideInMobile}></div>
          </Link>
        ) :
          <div className="scrollDown" data-link={link}></div>
      }
    </>
  );
}

export default ScrollToIndicator;
