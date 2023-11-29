
import React, {useState, useEffect} from 'react';
import { useAppSelector } from '../../../../app/hooks';
import TypingBoard from '../../../TypingBoard/typingBoard';
import PopUp from '../../pop-up/pop-up';
import './add-review-pop-up.css';
import { Rating, Typography } from '@mui/material';
import Button from '../../../forms/button/button';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ReviewService from '../../../../services/review/review';
import {  ReviewStatus } from '../../../../services/review/review.model';
import Local from '../../../../services/local-storage/local-storage';
import { LOCAL_KEYS } from '../../../../services/local-storage/local-storage.model';
import useSendMail from '../../../../core/hooks/useSendMail';
import { EmailTemplates } from '../../../../services/email-js/email-js.model';
import AddReviewButton from '../../../add-review/add-review-button/add-review-button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

type Props = {
  isOpen:boolean
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function AddReviewPopUp({ isOpen, setIsOpen } : Props) {

  const { sendExecute : sendNewReview } = useSendMail(EmailTemplates.addNewReview);
  const { sendExecute : sendReviewWasCancelled } = useSendMail(EmailTemplates.reviewWasCancelled);
  const { darkMode } = useAppSelector(state => state.appState);
  const [rate, setRate] = useState<number | null>(null);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showBtnReview, setShowBtnReview] = useState<boolean>(false);
  let timerId : any;


  useEffect(() => {
    let rateTimer:any;
    let r = 0;
    if(isOpen){
      rateTimer = setInterval(()=>{
        if(r < 5){
          r++;
          setRate(r)
        }else{
          clearInterval(rateTimer);
        }
      },300)
    }

    return () => clearInterval(rateTimer);
  }, [isOpen])


  useEffect(() => {
    const review = ReviewService.getReviewFromLocal();
    if(!review){
       startTimer(ReviewService.OPEN_REVIEW_POP_UP_MS)
    }

    if(review && review.status === ReviewStatus.cancelled){
       setShowBtnReview(true)
    } 

    return () => clearTimeout(timerId);
  }, [])


  useEffect(() => {
    const review = ReviewService.getReviewFromLocal();
    if(!isOpen && review && review.status === ReviewStatus.open ){
      ReviewService.setReviewLocal({status :  ReviewStatus.cancelled})
      setShowBtnReview(true);
      sendReviewWasCancelled({newTemplateParams: { 
        label : EmailTemplates.reviewWasCancelled.label,
        currentPage : window.location.pathname,
        stars : rate ,
        from : name || '---',
        message : message || '---'
       }})
    }
  }, [isOpen])


  const startTimer = (timeMS : number) => {
    clearTimeout(timerId);
    timerId = setTimeout(()=>{
      const isHasOpenPopUp = Local.read<string>(LOCAL_KEYS.CURRENT_OPEN_POP_UP, false)
      if(isHasOpenPopUp){
        return startTimer(4000);
      }
      ReviewService.setReviewLocal({status : ReviewStatus.open})
      setIsOpen(true);
    }, timeMS)
  }

  const onSubmitReview = () => {
    sendNewReview({newTemplateParams: { 
      label : EmailTemplates.addNewReview.label,
      currentPage : window.location.pathname,
      stars : rate ,
      from : name || '---',
      message : message || '---'
     }})
    ReviewService.setReviewLocal({status :  ReviewStatus.sent});
    setIsOpen(false);
    setShowBtnReview(false);
  }

  return (
    <>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} popUpId='review' closeOutsideClick={false}>
        <div className='add-review-pop-up'>
              <h2>היי זה הזמן לתת משוב</h2>
              <div className='pop-up-body'>
                <div className='description' data-dark={darkMode}>
                  <span>,שלום לך</span>
                  <p>
                    {isOpen && <TypingBoard timeMs={25} 
                      text='קוראים לי אשי, ואני עבדתי נורא קשה על האתר. אשמח שתקדיש ולו דקה אחת מזמנך לתת משוב קצר על התרשמותך מהאתר, כדי שאוכל לשפר ולייעל ככל האפשר.' 
                    />}
                  </p>
                </div>
        
                <div className='rate-container' >
                  <Rating
                  size='medium'
                    name="simple-controlled"
                    sx={{  "& .MuiRating-icon": {
                      color: 'var(--warnig)',
                    }
                  }}
                    value={rate}
                    onChange={(event, newValue) => {
                      if(!newValue) return;
                      setRate(newValue);
                    }}
                  />
                </div>

                <div className='review-form'>
                  <input aria-label="email" className='input' value={name} onChange={(e)=>setName(e.target.value)} name='email' type='email' placeholder='שם / מייל (אופציונלי)' style={{width:"100%", direction:'rtl', padding: "10px", marginBottom:"10px"}}/>
                  <textarea aria-label="message" className='input' value={message} onChange={(e)=>setMessage(e.target.value)} name='review message' placeholder="הכנס הערה... (אופציונלי)" rows={5} style={{width:"100%",  resize: 'none', direction:'rtl', padding: "10px"}}></textarea>
                </div>

                <div className='review-submit-container' data-dark={darkMode}>
                  <Button aria-label="send review" action={onSubmitReview} label={"שליחת דירוג"} outline isActive><ThumbUpIcon style={{fontSize:"2em"}}/></Button>
                </div>
          
              </div>
        </div>
      </PopUp>
       <AddReviewButton setIsOpen={setIsOpen} show={(!isOpen &&  showBtnReview)}/>
    </> 
  );
}

export default AddReviewPopUp;


   // function test() {
    //   const review = ReviewService.getReviewFromLocal();
    //   if(review && review.status === ReviewStatus.open && !isOpen){
    //     alert(1)
    //     ReviewService.setReviewLocal({status :  ReviewStatus.cancelled})
    //   }
    // }
    // window.addEventListener('storage', test)
    // return () => {
    //   window.removeEventListener('storage', test)
    // }