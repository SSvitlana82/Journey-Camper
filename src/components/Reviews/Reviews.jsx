import BookForm from "../BookForm/BookForm";
import style from "./Reviews.module.css";

import ReviewsBox from "../ReviewsBox/ReviewsBox";

const Reviews = ({ reviews }) => {
  return (
    <div className={style.container}>
      <ul>
        {reviews.map((data) => {
          return (
            <li key={data._id}>
              <ReviewsBox data={data} />
            </li>
          );
        })}
      </ul>

      <BookForm />
    </div>
  );
};

export default Reviews;
