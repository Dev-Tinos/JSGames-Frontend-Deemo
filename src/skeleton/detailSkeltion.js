import React from 'react';
import './skeletion.css';

const DetailSkeleton = () => {
    return (
        <div style={{ display: "flex" }}>

            <div className='navBox'>

            </div>

            <div>
                <div className='gameScreen'>
                </div>
                <div className='description'>
                </div>
            </div>
        </div>
    )
};

export default DetailSkeleton;