import axios from "axios"
import { MediaInfoType, MediaItemType } from "../../../interface/MediaInterface"

type MediaItemProps = {
    mediaItem: MediaItemType
    setCurrentMedia: React.Dispatch<React.SetStateAction<MediaInfoType>>;
}

function MediaItem({ mediaItem, setCurrentMedia }: MediaItemProps) {
    async function handleMediaItemOnClick() {
        const currentMedia = await axios.get(`http://localhost:5000/v1/media/item/${mediaItem.id}`)
        const currentMediaData = currentMedia.data
        setCurrentMedia(currentMediaData)
    }

    return (
        <button className="w-full flex px-5 py-5 items-center border bg-gray-100" onClick={handleMediaItemOnClick}>
            <div className="bg-blue-500 w-7 h-7 mr-3"></div>
            <div className="flex flex-col items-start grow">
                <p className="open-sans text-sm font-bold">{mediaItem.title}</p>
                <p className="xxs open-sans">{mediaItem.owner}</p>
            </div>
            <div className="bg-blue-500 w-10 h-10 ml-3"></div>
        </button>
    )
}

export default MediaItem
