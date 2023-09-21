import { useNavigate } from "react-router-dom"
import styless from "./navigate.module.css"

function Navitage() {
    const nav = useNavigate();
    return (
        <div className={styless.nav_container}>
            <div>
                <h1>로고 머시기</h1>
            </div>
            <div className={styless.list_container}>
                <p>List</p>
                <ul>
                    <li onClick={()=> nav('/')}>
                        Main
                    </li>
                    <li onClick={()=> nav('/ranking')}>
                        Ranking
                    </li>
                    <li onClick={()=> nav('/myPage')}>
                        마이페이지
                    </li>
                    <li>
                        커뮤니티
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navitage