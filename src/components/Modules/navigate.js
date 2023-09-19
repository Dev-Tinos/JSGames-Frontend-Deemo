import { useNavigate } from "react-router-dom"
import styless from "./navigate.module.css"
import Btn from "../Atoms/Button"
import Input from "../Atoms/Input";

function Navitage() {
    const nav = useNavigate();
    return (
        <div className={styless.nav_container}>
            <div>
                <h1>로고 머시기</h1>
                <Btn text={"hello"} />
                <Input placeholder={"입력해줘"}/>
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
                    <li>
                        커뮤니티
                    </li>
                    <li onClick={()=> nav('/myPage')}>
                        마이페이지
                    </li>
                    <li>
                        머시기머시기
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navitage