import DemoImg from '../../img/logo_img.png'

function GameImg(){
    return(
        <div>
            <img src={DemoImg} alt= "gameImg" style={{
                width: "100px",
                height: "100px",
                zIndex: "1",
                

            }}></img>
        </div>
    )
}

export default GameImg;