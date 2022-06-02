import React from 'react';
import { useLocation } from 'react-router-dom';

const ReviewDetail = () => {
    const location = useLocation();
    const reviewState = location.state.review;

    //console.log(reviewState)

    return (
        <section>
            <img src={reviewState.profileIMG} alt="profile" />
            <h3>{reviewState.nickname}</h3>
            <input type="text" />
            <button>Search</button>

            <img src={reviewState.reviewIMG} alt="review" />
            <select name="" id="">
                <option value="">숨기기</option>
                <option value="">신고하기</option>
                <option value="">삭제</option>
                <option value="">수정</option>
            </select>
            <p>{reviewState.reviewHashtags}</p>
            <h3>{reviewState.title}</h3>
            <p>{reviewState.reviewDescription}</p>


            <hr />
            <p>❤</p>
            <p>💌</p>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
        </section>
    );
};

export default ReviewDetail;