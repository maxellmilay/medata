import axios from "axios"
import { MediaInfoType, MediaItemType } from "../../../interface/MediaInterface"
import EditIcon from "./components/EditIcon"

type MediaItemProps = {
    mediaItem: MediaItemType
    currentMediaType: String
    setCurrentMedia: React.Dispatch<React.SetStateAction<MediaInfoType>>;
    fetchMedia: (type?: String) => Promise<void>
    fetchAllMedia: () => Promise<void>
}

function MediaItem({ mediaItem, currentMediaType, setCurrentMedia, fetchMedia, fetchAllMedia }: MediaItemProps) {
    async function handleMediaItemOnClick() {
        const currentMedia = await axios.get(`http://localhost:5000/v1/media/item/${mediaItem.id}`)
        const currentMediaData = currentMedia.data
        setCurrentMedia(currentMediaData)
    }

    async function handleDeleteMedia(media: MediaItemType) {
        await axios.delete(`http://localhost:5000/v1/media/item/${media.id}`)
        currentMediaType === 'All' ? fetchAllMedia() : fetchMedia(media.type)
    }

    return (
        <div className="w-full flex px-5 py-5 items-center border bg-gray-100">
            <button className="flex grow" onClick={handleMediaItemOnClick}>
                <div className="flex flex-col items-start grow">
                    <p className="open-sans text-sm font-bold">{mediaItem.title}</p>
                    <p className="xxs open-sans">{mediaItem.owner}</p>
                </div>
            </button>
            <button onClick={() => handleDeleteMedia(mediaItem)}><EditIcon /></button>
        </div>

    )
}

export default MediaItem
