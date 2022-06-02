import React from 'react';

const ReviewRevise = () => {
    return (
        <section>
            <select name="" id="">
                <option value="">말머리1</option>
                <option value="">말머리2</option>
                <option value="">말머리3</option>
            </select>
                <label htmlFor="reviewTitle">
                    <input name='reviewTitle' type="text" placeholder='제목' />
                </label>
                <br/>
                <label htmlFor="reviewHashtags">
                    <input name='reviewHashtags' type="text" placeholder='해시태그' />
                </label>
                
                <br/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br/>
                <input 
                    type="file"
                    accept='image/*'
                    name='file'
                />
        </section>
    );
};

export default ReviewRevise;