function GameTitle({ gameName }) {

    return (
        <h1 style={{
            marginBottom: "32px",
            fontSize: "42px",
            textAlign: "center"
        }}>
            {gameName}
        </h1>
    )
}

export default GameTitle;