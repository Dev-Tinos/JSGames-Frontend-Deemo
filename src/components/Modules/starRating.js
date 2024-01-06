import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(null);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            style={{
                                cursor: 'pointer',
                                transition: 'color 200ms',
                            }}
                        />
                    </label>
                );
            })}
            <p style={{ marginLeft: '10px', fontWeight: 'bold' }}>선택된 별점: {rating}</p>
        </div>
    );
};

export default StarRating;
