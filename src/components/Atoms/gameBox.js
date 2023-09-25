import { Link } from 'react-router-dom';

function GameBox() {
    return (

        <Link to={`/gamebox/1`}>
            <div style={{
                width: "220px",
                height: "220px",
                borderRadius: "15px",
                backgroundColor: "#FAFAFA",
            }}>


            </div>
        </Link>
    )
}

export default GameBox