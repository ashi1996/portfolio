import React, {useState, CSSProperties, useEffect, useRef} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './pop-up.css';
import CloseBtn from '../../forms/close-btn/close-btn';
import { useAppSelector } from '../../../app/hooks';
import Local from '../../../services/local-storage/local-storage';
import { LOCAL_KEYS } from '../../../services/local-storage/local-storage.model';

enum PopUpIds  {
  review = 'review',
  project = 'project'
}

type Props = {
  popUpId: `${PopUpIds}`
  customCss?: CSSProperties | undefined,
  children: JSX.Element 
  isOpen : boolean
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
  closeOutsideClick ?: boolean
}

function PopUp({isOpen, children , setIsOpen, popUpId, closeOutsideClick=true} : Props) {

  const { darkMode } = useAppSelector(state => state.appState);
  const innerPopUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      
      if (closeOutsideClick && innerPopUpRef.current && !innerPopUpRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [innerPopUpRef]);

  useEffect(()=>{
    if(popUpId !== PopUpIds.review){
      if(!isOpen){
        return Local.DEL(LOCAL_KEYS.CURRENT_OPEN_POP_UP)
      }
      Local.write<any>(LOCAL_KEYS.CURRENT_OPEN_POP_UP, popUpId);
    }
  },[isOpen])

  return (
    <div className='popup' data-dark={darkMode} style={{display : isOpen ? 'block' : 'none'}}>
        <div ref={innerPopUpRef} className='popup-inner'  data-dark={darkMode}>
        <CloseBtn action={()=> setIsOpen(false)}/>
           {children}
        </div>
    </div>
  );
}

export default PopUp;
