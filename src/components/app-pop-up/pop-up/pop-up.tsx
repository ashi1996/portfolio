import React, {useState, CSSProperties, useEffect, useRef} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './pop-up.css';
import CloseBtn from '../../forms/close-btn/close-btn';
import { useAppSelector } from '../../../app/hooks';

type Props = {
  customCss?: CSSProperties | undefined,
  children: JSX.Element 
  isOpen : boolean
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
  // close : setOpenPopUp
}

function PopUp({isOpen, children , setIsOpen} : Props) {

  const { darkMode } = useAppSelector(state => state.appState);
  const innerPopUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (innerPopUpRef.current && !innerPopUpRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [innerPopUpRef]);

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
