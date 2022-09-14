import ProfileInfo from "./ProfileInfo"
import MediaTypes from "./MediaTypes"
import FriendList from "./FriendList"

function Profile() {
    return (
        <div className="max-h-screen h-full flex flex-col fixed profile">
            <div className="w-full flex profile-header">
                <h2 className="m-auto">M E D A T A</h2>
            </div>
            <ProfileInfo />
            <MediaTypes />
            <FriendList />
        </div>
    )
}

export default Profile