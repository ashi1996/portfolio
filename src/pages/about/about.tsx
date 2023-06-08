import React from 'react';
import Button from '../../components/forms/button/button';
import './about.css';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import useFileDownloader from '../../core/hooks/useDownloadFile';

import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { appPages } from '../../core/models/appPages';

import AwsIcon from '../../assets/media/icons/icon-aws.png'
import CssIcon from '../../assets/media/icons/icon-css.png'
import ReactIcon from '../../assets/media/icons/icon-react.png'
import HtmlIcon from '../../assets/media/icons/icon-html.png'
import JsIcon from '../../assets/media/icons/icon-js.png'
import NodeIcon from '../../assets/media/icons/icon-node.png'
import NestIcon from '../../assets/media/icons/icon-nest.png'
import SqlIcon from '../../assets/media/icons/icon-sql.png'

import BootstrapIcon from '../../assets/media/icons/icon-bootstrap.png'
import MuiIcon from '../../assets/media/icons/icon-mui.png'
import MoleculerIcon from '../../assets/media/icons/icon-moleculer.png'
import GitIcon from '../../assets/media/icons/icon-git.png'
import MongoIcon from '../../assets/media/icons/icon-mongodb.png'
import FlipCard from '../../components/flip-card/flip-card';
import Skills from '../../components/skills/skills';
import Experience from '../../components/experience/experience';


function AboutPage() {

  const navigate = useNavigate();
  const { isLoading, downloadError, handleDownload } = useFileDownloader(
    process.env.PUBLIC_URL + '/pdf/Ashi-Mor-Resume.pdf',
    'Ashi-Mor-Resume.pdf' 
  );

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
                <Button action={handleDownload} label={"DOWNLOAD CV"} outline isActive><DownloadForOfflineRoundedIcon style={{fontSize:"2em"}}/></Button>
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
