import React from 'react';
import Button from '../../components/forms/button/button';
import './about.css';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import useFileDownloader from '../../core/hooks/useDownloadFile';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { appPages } from '../../core/models/appPages';
import Skills from '../../components/skills/skills';
import Experience from '../../components/experience/experience';
import { sedEmail } from '../../services/email-js/email-js';
import useUserLocation from '../../core/hooks/useUserLocation';


function AboutPage() {

  const navigate = useNavigate();
  const { darkMode, magicWand } = useAppSelector(state=> state.appState);
  const { isLoading, downloadError, handleDownload } = useFileDownloader(
    process.env.PUBLIC_URL + '/pdf/Ashi-Mor-Resume.pdf',
    'Ashi-Mor-Resume.pdf' 
  );
  const { ip, location, loading } = useUserLocation();

  function calculateAge(birthDate="1996-11-04") {
    const today = new Date();
    const birth = new Date(birthDate);
  
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  }

  const downloadCv = () => {
    handleDownload();

    const templateParams = {
      isMobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
       navigator.userAgent
     ),
     windowWidth : window.innerWidth || null,
     date : new Date().toLocaleString(),
     isDarkMode : darkMode,
     isMagicWand : magicWand,
      ip,
      City: location && location.city ,
      Region: location &&  location.region ,
      Country: location &&  location.country_name,
 
    };
  
    sedEmail(templateParams)
  }

  return (
    <div className='pageContainer aboutPage'>
      <div className='titelWrapper'>
        <h1>ABOUT <span>ME</span></h1>
        <span className='backgroundTitel'>Resume</span>
      </div>

      <div className='aboutBody'>

        <div className='row'>
          <div className='personalInfoWrapper'>
              <h3>PERSONAL INFOS</h3>

              <div className='personalInfoBody'>
                <ul>
                  <li>
                    <span className='titel'>First Name: </span>
                    <span className='value'>Ashi</span>
                  </li>
                  <li>
                    <span className='titel'>Last Name: </span>
                    <span className='value'>Mor</span>
                  </li>
                  <li>
                    <span className='titel'>Age: </span>
                    <span className='value'>{calculateAge()} Years</span>
                  </li>
                  {/*  */}
                  <li>
                    <span className='titel'>Freelance: </span>
                    <span className='value success'>Available</span>
                  </li>
                  <li>
                    <span className='titel'>Address: </span>
                    <span className='value'>IL, Ramat Gan</span>
                  </li>
                  <li>
                    <span className='titel'>Phone: </span>
                    <span className='value'>
                      <a href="tel:+972552286546" >+972552286546</a>
                    </span> 
                  </li>
                  {/*  */}
                  <li>
                    <span className='titel'>Langages: </span>
                    <span className='value'>Hebrew, English</span>
                  </li>
                  <li>
                    <span className='titel'>Hobbies: </span>
                    <span className='value'>Playing chess</span>
                  </li>
                  <li>
                    <span className='titel'>Email: </span>
                    <span className='value'>
                      <a href="mailto:ashimor1234@gmail.com" >ashimor1234@gmail.com</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className=''>
                <Button action={downloadCv} label={"DOWNLOAD CV"} outline isActive><DownloadForOfflineRoundedIcon style={{fontSize:"2em"}}/></Button>
              </div>
          </div>

          <div style={{width: '50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div onClick={()=> navigate(appPages.contact)} className='imgContainer' >
              <div className='img' />
            </div>
          </div>
        </div>

        <hr />
        <Skills />
        <hr />
        <Experience />
      
      </div>
    </div>
  );
}

export default AboutPage;
