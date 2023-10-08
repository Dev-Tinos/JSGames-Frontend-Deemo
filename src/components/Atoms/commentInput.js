import React, { useState } from 'react';


function CommentInput() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <textarea
            type="text"
            onChange={handleChange}
            placeholder="댓글을 입력하세요..."
            style={{
                width: "950px",
                height: "130px",
                backgroundColor: "transparent", // 배경색을 투명하게 설정
                padding: "16px",
                fontSize: "16px",
                resize: "none",
                border: "2px solid #B1C9F1"
            }}
        />
    )
}

export default CommentInput