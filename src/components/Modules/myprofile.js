import styless from "./myprofile.module.css"

function MyProfile({ userData }) {
    return (
        <div className={styless.profileContainer}>
            <div className={styless.profileSize}>
            </div>
            <div className={styless.textContainer}>
                <p className={styless.nickName}>
                    {userData.nickname}
                </p>
                <p>
                    {userData.email}
                </p>
                <p>
                    {userData.major}
                </p>
            </div>
        </div>
    )

}

export default MyProfile