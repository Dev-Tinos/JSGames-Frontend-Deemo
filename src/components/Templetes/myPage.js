import Navitage from "../Modules/navigate";
import SelectMy from "../Modules/selectMy";

function RankingPage() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div>
                    <SelectMy/>
                </div>
            </div>
        </div>
    )
}
export default RankingPage;