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
}

function MediaList({ toggleModal, fetchMedia, mediaList, setCurrentMedia, mediaTypes, currentMediaType, setCurrentMediaType, isDropped, setIsDropped }: MediaListProps) {

    useEffect(() => {
        fetchMedia();
    }, [])

    return (
        <div className="flex flex-col w-2/5 max-w-4xl border-b border-r">
            <TypeTitle isDropped={isDropped} setIsDropped={setIsDropped} mediaTypes={mediaTypes} currentMediaType={currentMediaType} setCurrentMediaType={setCurrentMediaType} fetchMedia={fetchMedia} />
            <div className="flex flex-col media-list overflow-auto scrollbar">
                {mediaList.map((item: MediaItemType, index) => {
                    return <MediaItem key={index} mediaItem={item} setCurrentMedia={setCurrentMedia} />
                })}
            </div>
            <AddMediaButton toggleModal={toggleModal} />
        </div>
    )
}

export default MediaList
