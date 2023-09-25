import Input from "../Atoms/searchInput"
import styless from "./searchbox.module.css"
import Searchbtn from "../Atoms/searchbtn"

function Searchbox() {

    return (
        <div className={styless.boxContainer}>
            <div>
                <Input />
            </div>
            <div className={styless.searchbtn}>
                <Searchbtn />
            </div>
        </div>
    )
}

export default Searchbox;