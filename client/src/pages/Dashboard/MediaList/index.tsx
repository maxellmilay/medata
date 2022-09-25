import { useEffect } from "react"
import { MediaItemType, ToggleModalType, MediaInfoType } from "../../../interface/MediaInterface"
import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"
import AddMediaButton from "./AddIMediaButton"

type MediaListProps = ToggleModalType & {
    fetchMedia: () => Promise<void>
    mediaList: MediaItemType[]
    setCurrentMedia: React.Dispatch<React.SetStateAction<MediaInfoType>>
}

function MediaList({ toggleModal, fetchMedia, mediaList, setCurrentMedia }: MediaListProps) {

    useEffect(() => {
        fetchMedia();
    }, [])

    return (
        <div className="flex flex-col w-2/5 max-w-4xl border-b">
            <TypeTitle />
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
