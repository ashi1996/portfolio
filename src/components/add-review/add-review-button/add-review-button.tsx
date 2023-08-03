import React from 'react';
import './add-review-button.css';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function AddReviewButton({setIsOpen , show} :any) {

  return (
    <>
        <div className='add-review-button' data-visible={show} >
          <p className='rate-link'>
            <a onClick={()=> setIsOpen(true)}>RATE</a>
          </p>
          <div className='add-review-icon-container'>
            <ThumbUpIcon />
          </div>
        </div>
    </>
  );
}

export default AddReviewButton;
