import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewItem = ({review}) => {
    const navigate = useNavigate()

    return (
        <section>
            <img src={review.reviewIMG} alt="review"
                onClick={()=>{
                    navigate(`/reviews/${review.id}`, {state : {review}})
                }}
            />
            <h3>{review.reviewTitle}</h3>
            <p>{review.nickname}</p>
            <hr />
        </section>
    );
};

export default ReviewItem;