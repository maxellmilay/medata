import { useEffect } from "react"
import { MediaItemType, ToggleModalType, MediaInfoType } from "../../../interface/MediaInterface"
import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"
import AddMediaButton from "./AddIMediaButton"

type MediaListProps = ToggleModalType & {
    fetchMedia: (type?: String) => Promise<void>
    mediaList: MediaItemType[]
    setCurrentMedia: React.Dispatch<React.SetStateAction<MediaInfoType>>
    mediaTypes: String[]
    currentMediaType: String
    setCurrentMediaType: React.Dispatch<React.SetStateAction<String>>
    isDropped: Boolean
    setIsDropped: React.Dispatch<React.SetStateAction<Boolean>>
    fetchAllMedia: () => Promise<void>
    fetchMediaType: () => Promise<void>
    toggleEditModal: () => void
    currentMedia: MediaInfoType
    setCurrentMediaID: React.Dispatch<React.SetStateAction<String>>
}

function MediaList({ setCurrentMediaID, currentMedia, toggleEditModal, fetchMediaType, fetchAllMedia, toggleModal, fetchMedia, mediaList, setCurrentMedia, mediaTypes, currentMediaType, setCurrentMediaType, isDropped, setIsDropped }: MediaListProps) {

    useEffect(() => {
        fetchMediaType()
        currentMediaType === "All" ? fetchAllMedia() : fetchMedia();
    }, [])

    return (
        <div className="flex flex-col w-2/5 max-w-4xl border-b border-r">
            <TypeTitle fetchAllMedia={fetchAllMedia} isDropped={isDropped} setIsDropped={setIsDropped} mediaTypes={mediaTypes} currentMediaType={currentMediaType} setCurrentMediaType={setCurrentMediaType} fetchMedia={fetchMedia} />
            <div className="flex flex-col media-list overflow-auto scrollbar">
                {mediaList.map((item: MediaItemType, index) => {
                    return <MediaItem key={index} setCurrentMediaID={setCurrentMediaID} currentMedia={currentMedia} toggleEditModal={toggleEditModal} fetchAllMedia={fetchAllMedia} currentMediaType={currentMediaType} fetchMedia={fetchMedia} mediaItem={item} setCurrentMedia={setCurrentMedia} />
                })}
            </div>
            <AddMediaButton toggleModal={toggleModal} />
        </div>
    )
}

export default MediaList
