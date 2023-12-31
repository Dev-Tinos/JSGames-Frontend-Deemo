function CommentBtn({ onClick, disabled }) {
    return (
        <button style={{
            width: "120px",
            height: "50px",
            color: "black",
            fontSize: "16px",
            border: "2px solid #B1C9F1",
            backgroundColor: "transparent",
            marginTop: "4px"
        }}
            disabled={disabled}
            onClick={onClick}
        >
            등록
        </button>
    )

}

export default CommentBtn