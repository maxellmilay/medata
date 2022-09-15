import MediaItemDetails from "./MediaItemDetails"
import ProfileOptions from "./ProfileOptions"

function MediaInfo() {
    return (
        <div className="flex flex-col h-full w-3/5 grow bg-green-400">
            <ProfileOptions />
            <MediaItemDetails />
        </div>
    )
}

export default MediaInfo