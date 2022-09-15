import ProfileInfo from "./ProfileInfo"
import MediaTypes from "./MediaTypes"
import FriendList from "./FriendList"

function Profile() {
    return (
        <div className="h-full relative flex flex-col profile border-r">
            <div className="w-full flex profile-header border-b">
                <h2 className="m-auto source-sans-pro text-xl tracking-widest text-gray-500">MEDATA</h2>
            </div>
            <ProfileInfo />
            <MediaTypes />
            <div className="width-full grow" />
            <FriendList />
        </div>
    )
}

export default Profile
