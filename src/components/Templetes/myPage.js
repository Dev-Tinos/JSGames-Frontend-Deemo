import Navitage from "../Modules/navigate";
import styless from "./myPage.module.css"
import CategorySelection from "../Modules/categorySelection";

function RankingPage() {

    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.profileBox}>
                    <CategorySelection
                        category1="내 정보"
                        category2="Record"
                        data1="내 정보 데이터"
                        data2="Record 데이터"
                        width="764"
                        height="456"
                    />
                </div>
            </div>
        </div>
    )
}
export default RankingPage;



