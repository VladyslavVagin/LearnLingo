import React from "react";
import chica1 from "../../../../img/avatars_reviews/chica1.webp";
import chico1 from "../../../../img/avatars_reviews/chico1.webp";
import sprite from "../../../../icons/icons.svg";
import { ImgContainer, ListReviewers, Reviewer } from "./Reviews.styled";

const Reviews = ({ reviews }) => {
  return (
    <ListReviewers>
        {reviews.map((review, index) => {
         return (<li key={index}>
         <ImgContainer>
           <img src={index === 0 ? chica1 : chico1} alt="Animated person" width={44} height={44} />
           <Reviewer>
             <p>{review.reviewer_name}</p>
             <div>
               <svg width={16} height={16}>
                 <use xlinkHref={`${sprite}#icon-star`}></use>
               </svg>
               <span>{review.reviewer_rating.toFixed(1)}</span>
             </div>
           </Reviewer>
         </ImgContainer>
         <p>{review.comment}</p>
       </li>)
        })}
    </ListReviewers>
  );
};

export default Reviews;
