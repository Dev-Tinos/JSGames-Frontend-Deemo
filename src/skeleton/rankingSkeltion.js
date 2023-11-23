import React from 'react';
import './skeletion.css';

const RankingSkeltion = () => {
    return (
        <div style={{ display: "flex" }}>
            <div className='navBox'>
            </div>
            <div>
                <div className='rankingScreen'>
                    <div className='list_box'>
                        <span className='ranking_text'>순위</span>
                        <span className='profile_text'>프로필</span>
                        <span className='nickname_text'>닉네임</span>
                        <span className='message_text'>업적</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RankingSkeltion;