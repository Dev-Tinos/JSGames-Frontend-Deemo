function GameImg({imageUrl}){
    return(
        <div>
            <img src={imageUrl} alt= "gameImg" style={{
                width: "120px",
                height: "120px",
                zIndex: "1",

            }}></img>
        </div>
    )
}

export default GameImg;