import ProfileInfo from "./ProfileInfo"
import MediaTypes from "./MediaTypes"
import FriendList from "./FriendList"

type ProfileProps = {
    fetchMediaType: () => Promise<void>
    mediaTypes: String[]
    setCurrentMediaType: React.Dispatch<React.SetStateAction<String>>
    fetchMedia(type?: String): Promise<void>
}

function Profile({ mediaTypes, fetchMediaType, setCurrentMediaType, fetchMedia }: ProfileProps) {
    return (
        <div className="h-full relative flex flex-col profile border-r">
            <div className="w-full flex profile-header border-b">
                <h2 className="m-auto source-sans-pro text-xl tracking-widest text-gray-500">MEDATA</h2>
            </div>
            <ProfileInfo />
            <MediaTypes fetchMedia={fetchMedia} setCurrentMediaType={setCurrentMediaType} mediaTypes={mediaTypes} fetchMediaType={fetchMediaType} />
            <div className="width-full grow" />
            <FriendList />
        </div>
    )
}

export default Profile
