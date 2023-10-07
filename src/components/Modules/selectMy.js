import React, { useState } from 'react';

function SelectMy() {
    const [index, setIndex] = useState(1);
    const messages = {
        messageBox: [
            // 샘플 데이터를 여기에 추가...
        ]
    };

    return (
        <div>
            <div className="alarm_list">
                <span 
                    onClick={() => setIndex(1)} 
                    className={index === 1 ? 'selected' : ''}
                >
                    내 정보
                </span>
                <span 
                    onClick={() => setIndex(2)} 
                    className={index === 2 ? 'selected' : ''}
                >
                    Record
                </span>
            </div>

            {index === 1 ? (
                <div>
                    {/* 알림 내용 */}
                </div>
            ) : (
                <div>
                    <p>asdkf</p>
                </div>
            )}
        </div>
    );
}

export default SelectMy;
