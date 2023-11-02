import { Link } from 'react-router-dom';

function GameBox({ gameId, gameName }) {
    return (

        <Link to={`/gamebox/${gameId}`} style={{ textDecoration: 'none' }}>
            <div style={{
                
                width: "220px",
                height: "220px",
                borderRadius: "15px",
                backgroundColor: "#FAFAFA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "black"
            }}>
                <p>{gameName}</p>
            </div>
        </Link>
    )
}

export default GameBox