import { Link } from 'react-router-dom';
import GameImg from '../Atoms/gameImg';
import styless from './gameBox.module.css'

function GameBox({ gameId, gameName, viewCount, imageUrl}) {
    return (
        <Link to={`/gamebox/${gameId}`} style={{ textDecoration: 'none' }}>
            <div className={styless.gameBox}>
                <GameImg 
                    imageUrl={imageUrl}
                />
                <p className={styless.gameTitle}>{gameName}</p>
                <span className={styless.gameView}>{viewCount}</span>
            </div>
        </Link>
    )
}

export default GameBox