import styless from "./categorySelection.module.css"
import React, { useState } from 'react';
import GameRankingBox from "./gameRankingBox";
import RankingBox from "./rankingBox";

function CategorySelection({ category1, category2, data1, data2, width, height }) {
    const [index, setIndex] = useState(1);

    return (
        <div>
            <div className={styless.category}>
                <span
                    onClick={() => setIndex(1)}
                    className={index === 1 ? styless.selected : ''}
                >
                    {category1}
                </span>
                <span
                    onClick={() => setIndex(2)}
                    className={index === 2 ? styless.selected : ''}
                >
                    {category2}
                </span>
            </div>

            {index === 1 ? (
                <div className={styless.informationBox}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                >
                    <div className={styless.list_box}>
                        <span className={styless.ranking_text}>순위</span>
                        <span className={styless.profile_text}>프로필</span>
                        <span className={styless.nickname_text}>닉네임</span>
                        <span className={styless.message_text}>업적</span>
                    </div>
                    <p>{data1.map((game, index) => (
                        <RankingBox
                            num={index+1}
                            nickname = {game.user.nickname}
                        />
                    ))}</p>
                </div>
            ) : (
                <div className={styless.informationBox}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                >
                    <div className={styless.list_box}>
                        <span className={styless.ranking_text}>순위</span>
                        <span className={styless.game_name}>게임 이름</span>
                        <span className={styless.game_view}>조회수</span>
                    </div>
                    <p>{data2.map((game, index) => (
                        <GameRankingBox
                            num={index+1}
                            gameName={game.gameName}
                            view={game.viewCount}
                        />
                    ))}</p>
                </div>
            )}
        </div>
    )
}

export default CategorySelection