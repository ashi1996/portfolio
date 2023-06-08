import React from 'react';
import Card from '../../components/card/card';
import { ProjectsData } from '../../core/data/projects';
import './portfolio.css';

function PortfolioPage() {
  return (
    <div className='pageContainer portfolioPage'>
        <div className='titelWrapper'>
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
  );
}

export default PortfolioPage;
