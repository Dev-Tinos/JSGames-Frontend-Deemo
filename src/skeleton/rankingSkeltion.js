import React, { useState } from 'react';
import './skeletion.css';

const RankingSkeltion = () => {
    const [index, setIndex] = useState(1);

    return (
        <div style={{ display: "flex" }}>
            <div className='navBox'>
            </div>
            <div>
                <div className='rankingScreen'>
                    <div className='list_box'>
                        <div>
                            <div className='category'>
                                <span
                                    onClick={() => setIndex(1)}
                                    className={index === 1 ? 'selected' : ''}
                                >
                                    사용자 랭킹
                                </span>
                                <span
                                    onClick={() => setIndex(2)}
                                    className={index === 2 ? 'selected' : ''}
                                >
                                    게임 랭킹
                                </span>
                            </div>

                            {index === 1 ? (
                                <div className='informationBox'>
                                    <div className='list_box'>
                                        <span className='ranking_text'>순위</span>
                                        <span className='profile_text'>프로필</span>
                                        <span className='nickname_text'>닉네임</span>
                                        <span className='message_text'>업적</span>
                                    </div>
                                </div>
                            ) : (
                                <div className='informationBox'>
                                    <div className='list_box'>
                                        <span className='ranking_text'>순위</span>
                                        <span className='game_name'>게임 이름</span>
                                        <span className='game_view'>조회수</span>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RankingSkeltion;