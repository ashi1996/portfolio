import React from 'react';
import './contact.css';
import LinkdinIcon from '../../assets/media/icons/linkdin.png';
import FacebookIcon from '../../assets/media/icons/facebook.png';
import InstagramIcon from '../../assets/media/icons/instagram.png';
import GithubIcon from '../../assets/media/icons/github.png';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Link , useLocation} from 'react-router-dom'
import TypingBoard from '../../components/TypingBoard/typingBoard';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function ContactPage() {
  

  return (
    <div className='pageContainer contactPage '>
      <div className='titelWrapper'>
        <h1>GET IN <span>TOUCH</span></h1>
        <span className='backgroundTitel'>CONTACT</span>
      </div>

      <div>
        <h3>DON'T BE SHY !</h3>
        <div className='sub-titel-container'>
          <p className='sub-titel'>
            <TypingBoard timeMs={25} text='Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.'/>
          </p>
        </div>

        <p className='contact-item'>
          <MapOutlinedIcon className='i'/>
          <span>Address Point</span>
            Israel Ha-Yarden St 27 Ramat Gan, 5228134.
        </p>

        <Link to='mailto:ashimor1234@gmail.com' rel="noreferrer" target={'_blank'} style={{textDecoration:"none"}}>
          <p className='contact-item link'>
            <DraftsOutlinedIcon className='i'/>
            <span>MAIL ME</span>
              ashimor1234@gmail.com
          </p>
        </Link>

        <Link to='tel:+972552286546' style={{textDecoration:"none"}}>
          <p className='contact-item link'>
            <CallOutlinedIcon className='i'/>
            <span>CALL ME</span>
              +972 55 2286546
          </p>
        </Link>

        <ul>
          <li>
            <Link to='https://www.linkedin.com/in/ashi-mor' rel="noreferrer" target={'_blank'}><img height='40px' width='40px' src={LinkdinIcon}/></Link>
          </li>
          <li>
          <Link to='https://www.facebook.com/profile.php?id=100005002719522' rel="noreferrer" target={'_blank'}><img height='40px' width='40px' src={FacebookIcon}/></Link>
          </li>
          <li>
          <Link to='https://www.instagram.com/ashi.mor/' rel="noreferrer" target={'_blank'}><img height='40px' width='40px' src={InstagramIcon}/></Link>
          </li>
          <li>
          <Link to='https://github.com/ashi1996/' rel="noreferrer" target={'_blank'}><img height='40px' width='40px' className='invertMe' src={GithubIcon}/></Link>
          </li>
            { navigator.share &&
              <li className='share' onClick={async () => {
                try {
                  await navigator.share({ url: window.location.origin , title: "Ashi Mor Portfolio",});
                } catch (err) { }}}>
                <Link to='' rel="noreferrer" ><ShareOutlinedIcon height='40px' width='40px' className='share'/></Link>
              </li>
            }
        </ul>
      </div>
    </div>
  );
}

export default ContactPage;
