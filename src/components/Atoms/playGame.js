function PlayGame({gmaeSrc}) {
    return (
        <iframe
            title="Game Frame"
            src={gmaeSrc}
            style={{
                width: "1006px",
                height: "624px",
                backgroundColor: "#FAFAFA",
                borderRadius: "15px",
            }}
        />
    )
}

export default PlayGame;
