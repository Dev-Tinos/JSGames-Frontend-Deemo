function RankingNum({ num }) {
    return (
        <div style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px"
        }}>
            <p>{num}</p>
        </div >
    )
}

export default RankingNum;