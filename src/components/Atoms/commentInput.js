function CommentInput({ value, onChange, disabled }) {
    const disabledStyle = {
        backgroundColor: "#f0f0f0",
        backgroundImage: "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 50%, #ccc 50%, #ccc 75%, transparent 75%, transparent)", // 대각선 빗금 패턴
        backgroundSize: "20px 20px",
        color: "#a0a0a0"
    };
    const style = {
        width: "950px",
        height: "130px",
        backgroundColor: "transparent",
        padding: "16px",
        fontSize: "16px",
        resize: "none",
        border: "2px solid #B1C9F1"
    };

    const finalStyle = disabled ? { ...style, ...disabledStyle } : style;

    return (
        <textarea
            placeholder="댓글을 입력하세요..."
            style={finalStyle}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
}

export default CommentInput;
