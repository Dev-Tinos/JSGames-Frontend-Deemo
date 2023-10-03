import ProfileBackground from "../Atoms/profileBackground";
import RecordBox from "../Atoms/recordBox";
import styless from "./profileBox.module.css";
import Nickname from "../Atoms/nickname"
import StatusMsg from "../Atoms/statusMsg"
import Subheading from "../Atoms/subheading"

function ProfileBox() {
    return (
        <div className={styless.wrapper}>
            <ProfileBackground />
            <div className={styless.recordBoxPosition}>
                <Subheading contents={"Record"} />
                <RecordBox />
            </div>
            <span className={styless.informationPosition}>
                <Nickname />
                <StatusMsg />
            </span>
        </div>
    );
}
export default ProfileBox;
