import React from 'react';
import './skeletion.css';
import PlayGame from "../components/Atoms/playGame";
import GameDescription from "../components/Modules/gameDescription"
import Subheading from "../components/Atoms/subheading";
import CommentBox from "../components/Modules/commentBox";
import GameTitle from "../components/Atoms/gameTitle";

const DetailSkeleton = () => {
    return (
        <div style={{ display: "flex" }}>

            <div className='navBox'>

            </div>

            <div className="game_position">
                    <GameTitle
                        gameName={"게임"}
                    />
                    <PlayGame
                        gmaeSrc={"..."}
                    />
                    <GameDescription
                        description={"...."}
                    />

                    <Subheading contents={"Top 3"} />

                    <div class="NametopBox">
                        
                    </div>
                    <Subheading contents={"댓글"} />
                    <CommentBox
                        
                    />
                    <div className="commentBox">
                        
                    </div>
                </div>
            
        </div>
    )
};

export default DetailSkeleton;