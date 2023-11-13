import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {useNavigate} from 'react-router-dom'
import Badge from '../badge/badge';
import { IProject } from '../../core/models/common';
import './card.css';
import ProjectPopup from '../app-pop-up/childrens-popup/project-pop-up/project-pop-up';


interface cardProps {
    project :IProject ;
}

const Card: React.FC<cardProps> = ({project : {description, img, link, tags, titel } }) => {


    const [openPopUp, setOpenPopUp] = useState(false);
    const { darkMode } = useAppSelector(state => state.appState);
    const dispach = useAppDispatch();
    const navigate = useNavigate();


    // const onclickEdit = () => {
    //     navigate('/add-or-edit', {state :{ ...festival}})
    // } 


    function trimText(text:string, maxLength = 60) {
        if (text.length > maxLength) {
          text = text.substring(0, maxLength - 3) + '...';
        }
        return text;
    }


    return (
        <>
            <div className="card-container" data-aos="flip-down">
                <div className="card">
                    <img onClick={()=>setOpenPopUp(true)} src={img} alt={titel} data-dark={darkMode}/>
                    <div className="card__content">
                            {/* <strong>Web Design</strong> */}
                            <div className='description-wrapper'>
                                <p>
                                    {trimText(description)}
                                </p>
                                <span onClick={()=>setOpenPopUp(true) }>READ MORE</span>
                            </div>
                            
                            <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'start', marginBottom:"10px"}}>
                                {
                                    tags.map((tag, i) =>(
                                        <Badge key={i} customCss={{margin: '4px', padding:'7px 12px', textTransform:'uppercase', background:'var(--warning)' , fontWeight:'600' }} label={tag}/>
                                    ))
                                }
                            </div>

                        </div>
                    
                    <div className='card-titel' >
                    <h4><a style={{pointerEvents: link ? 'auto' : 'none'}} data-dark={darkMode} href={link} target='_blank'>{titel}</a></h4>
                    </div>
            
                </div>
            </div>
            <ProjectPopup isOpen={openPopUp} setIsOpen={setOpenPopUp} project={{description, img, link, tags, titel }}/>
        </>
    );
}

export default Card;
