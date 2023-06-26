import React from 'react';
import './home.css';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/forms/button/button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useNavigate } from 'react-router-dom';
import { appPages } from '../../../core/models/appPages';
import TypingBoard from '../../../components/TypingBoard/typingBoard';

function HomePage() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const resourcePath = 'pages.home';

  return (
    <div className='pageContainer homePage'  >

        <div className='profile-content'>
          <div className='box-wrapper'>
            <h2 className='titel'>hello, i am ashi</h2>
            <h1>i'm a <span>fullstack</span> developer</h1>
            <div className='text-box'>
              <p>
                <TypingBoard timeMs={25} text='Are you looking for a fullstack developer who works hard but stays  humble?'/>  
              </p>
              {/* <p style={{visibility:'hidden'}}>
                'Are you looking for a fullstack developer who works hard but stays  humble?  
              </p> */}
            </div>
            <div className='more-about-btn' >
              <Button action={()=> navigate(appPages.about)} label={t(`${resourcePath}.morAbouteMeBtn`)} outline isActive><ArrowCircleRightOutlinedIcon style={{fontSize:"2em"}}/></Button>
            </div>
          </div>
        </div>

      <div className='profile-section'> </div>
    </div>
  );
}

export default HomePage;
