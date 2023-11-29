import React from 'react';
import Card from '../../components/card/card';
import { ProjectsData } from '../../core/data/projects';
import {  appSectionsIds } from '../../core/models/appPages';
import './portfolio.css';

function PortfolioPage() {

  return (
    <section id={appSectionsIds.portfolio} aria-label="portfolio">
    <div className='pageContainer portfolioPage' >
        <div className='titleWrapper'>
          <h1>MY <span>PORTFOLIO</span></h1>
          <span className='backgroundTitel'>WORKS</span>
        </div>
        <div className='portfolioPage-body'>
          {
            ProjectsData.map((project,index)=> (
              <Card project={project} key={index}/>
            ))
          }
        </div>
    </div>
    </section>
  );
}

export default PortfolioPage;
