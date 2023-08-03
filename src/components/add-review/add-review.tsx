import React, { useState } from 'react';
import AddReviewPopUp from '../app-pop-up/childrens-popup/add-review-pop-up/add-review-pop-up';

function AddReview() {

  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <AddReviewPopUp isOpen={openPopUp} setIsOpen={setOpenPopUp} />
  );
}

export default AddReview;
