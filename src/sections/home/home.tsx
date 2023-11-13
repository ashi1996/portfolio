import React from 'react';
import './home.css';
import { useTranslation } from 'react-i18next';
import Button from '../../components/forms/button/button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useNavigate } from 'react-router-dom';
import { appPages, appSectionsIds } from '../../core/models/appPages';
import TypingBoard from '../../components/TypingBoard/typingBoard';
import BallAnimate from '../../components/ball-animate/ball-animate';
import { Link } from 'react-scroll';
import GetDeviceInfo from '../../core/hooks/useDeviceInfo';

function HomePage() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const resourcePath = 'pages.home';

  const deviceInfo =  GetDeviceInfo();

  
  return (
    <section id={appSectionsIds.home} >
      <div className='pageContainer homePage'  >
        <div className='profile-content'>
          <div className='box-wrapper'>
            <h2 className='titel'>hello, i am ashi</h2>
            <h1>i'm a <span>fullstack</span> developer</h1>
            <div className='text-box'>
              <p>
                <TypingBoard timeMs={25} text='Are you looking for a fullstack developer who works hard but stays  humble?' />
              </p>
            </div>

            <div className='more-about-btn' >
              <Link
                to={appSectionsIds.about}
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button action={() => { }} label={t(`${resourcePath}.morAbouteMeBtn`)} outline isActive><ArrowCircleRightOutlinedIcon style={{ fontSize: "2em" }} /></Button>
              </Link>
            </div>
          </div>
        </div>

        {
          deviceInfo.isDesktop && (
            <div className='ball-container'>
            <div className='inner'>
              <BallAnimate />
            </div>
          </div>
          )
        }
      
      </div>
    </section>
  );
}

export default HomePage;
