import ProfileInfo from "./ProfileInfo"
import MediaTypes from "./MediaTypes"
import FriendList from "./FriendList"

function Profile() {
    return (
        <div className="h-full relative flex flex-col profile">
            <div className="w-full flex profile-header">
                <h2 className="m-auto source-sans-pro-bold text-xl tracking-widest">MEDATA</h2>
            </div>
            <ProfileInfo />
            <MediaTypes />
            <div className="width-full grow bg-blue-400" />
            <FriendList />
        </div>
    )
}

export default Profile
