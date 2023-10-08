import Navitage from "../Modules/navigate";
import styless from "./myPage.module.css"
import React, { useState } from 'react';


function RankingPage() {
    const [index, setIndex] = useState(1);

    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.profileBox}>
                    <div>
                        <div className={styless.alarm_list}>
                            <span
                                onClick={() => setIndex(1)}
                                className={index === 1 ? styless.selected : ''}
                                >
                                내 정보
                            </span>
                            <span
                                onClick={() => setIndex(2)}
                                className={index === 2 ? styless.selected : ''}
                            >
                                Record
                            </span>
                        </div>

                        {index === 1 ? (
                            <div className={styless.informationBox}>
                                <p>내정보들</p>
                            </div>
                        ) : (
                            <div className={styless.informationBox}>
                                <p>기록들</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RankingPage;



