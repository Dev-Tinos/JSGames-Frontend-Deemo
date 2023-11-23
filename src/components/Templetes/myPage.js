import { useState } from "react";
import Navitage from "../Modules/navigate";
import styless from "./myPage.module.css";
import MyProfile from "../Modules/myprofile";
// import MyRanking from "../Modules/myRanking";

function RankingPage({ information }) {
    const [isFlipped, setIsFlipped] = useState(true);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div
                    className={`${styless.profileBox} ${isFlipped ? styless.flipped : ""}`}
                    onClick={handleFlip}
                >
                    <div>
                        <p className={isFlipped ? styless.flippedText : ""}>
                            {isFlipped ? <MyProfile userData={information} /> : <p>asdf</p>}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingPage;
