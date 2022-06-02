import { useNavigate } from 'react-router-dom';
import ReviewItem from './reviewItem';

const ReviewPage = ({reviews}) => {

    const navigate = useNavigate()
    return (
        <section>
            <h1>중고거래 인기매물</h1>
            <input type="text" />
            <button>search</button> <br/>
            <button 
                onClick={()=>{
                    navigate('/reviews/write')
                }}
            >글쓰기</button>
            <ul>
                {
                    reviews.map(review => (
                    <li key={review.id}>
                        <ReviewItem review={review}/>
                    </li>))
                }
            </ul>
        </section>
    );
};

export default ReviewPage;