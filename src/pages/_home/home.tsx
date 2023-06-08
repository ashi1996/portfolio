import React from 'react';
import './home.css';
import ProfileImge from '../../assets/media/images/profile.jpg'
import { useTranslation } from 'react-i18next';
import Button from '../../components/forms/button/button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useNavigate } from 'react-router-dom';
import { appPages } from '../../core/models/appPages';

function HomePage() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const resourcePath = 'pages.home';

  return (
    <div className='pageContainer homePage'  >


        
        <div className='leftBox'>
            <div className="profile-container">
              <img alt='profile imge' src={ProfileImge} width="360" height="360" />
            </div>
        </div>
        {/* RIGHT */}
        <div className='rightBox'>
          <div className='innerBox'>

            <div className='titel'>
              <h1> {t(`${resourcePath}.titel`)}</h1>
            </div>
            <h3 style={{padding: '8px', margin: 0}}> {t(`${resourcePath}.subTitel`)}</h3>
            <p style={{padding: '8px', margin: 0}}> {t(`${resourcePath}.description`)}</p>

            <div className='aboutMeBtn' >
              <Button action={()=> navigate(appPages.about)} label={t(`${resourcePath}.morAbouteMeBtn`)} outline isActive><ArrowCircleRightOutlinedIcon style={{fontSize:"2em"}}/></Button>
            </div>
          </div>
        </div>

    </div>
  );
}

export default HomePage;
