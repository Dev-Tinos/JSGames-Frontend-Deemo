import React from 'react';
import './skeletion.css';

const MainSkeleton = () => {
    return (
        <div style={{ display: "flex" }}>

            <div className='navBox'>

            </div>

            <div>
                <div className='bannerBox'>
                </div>
                <div className='game_container'>
                    <div className='gamebox'></div>
                    <div className='gamebox'></div>
                    <div className='gamebox'></div>
                    <div className='gamebox'></div>
                    <div className='gamebox'></div>
                    <div className='gamebox'></div>
                </div>

            </div>
        </div>
    )
};

export default MainSkeleton;