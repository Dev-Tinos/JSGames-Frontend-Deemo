import DemoImg from '../../img/logo_img.png'

function GameImg(){
    return(
        <div>
            <img src={DemoImg} alt= "gameImg" style={{
                width: "100px",
                height: "100px",
            }}></img>
        </div>
    )
}

export default GameImg;