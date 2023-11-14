import Local from "../local-storage/local-storage";
import { LOCAL_KEYS } from "../local-storage/local-storage.model";
import { IReview } from "./review.model";

const OPEN_REVIEW_POP_UP_MS = 15000;

const getReviewFromLocal = () : IReview | null => Local.read<IReview>(LOCAL_KEYS.REVIEW);

const setReviewLocal = (data: IReview) => data && Local.write<IReview>(LOCAL_KEYS.REVIEW, data);


const ReviewService = {
  OPEN_REVIEW_POP_UP_MS,
  getReviewFromLocal,
  setReviewLocal
}

export default ReviewService

