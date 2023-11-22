function CommentInput({value,onChange, disabled }) {

    return (
        <textarea
            type="text"
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
            value={value}
            onChange={onChange}
            disabled={disabled}

        />
    )
}

export default CommentInput