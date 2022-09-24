import { useEffect, useState } from "react"
import { MediaItemType, ToggleModalType } from "../../../interface/MediaInterface"
import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"
import axios from 'axios'
import AddMediaButton from "./AddIMediaButton"

type MediaListProps = ToggleModalType & {
    fetchMedia: () => Promise<void>
    mediaList: MediaItemType[]
}

function MediaList({ toggleModal, fetchMedia, mediaList }: MediaListProps) {
    useEffect(() => {
        fetchMedia();
    }, [])

    return (
        <div className="flex flex-col w-2/5 max-w-4xl border-b">
            <TypeTitle />
            <div className="flex flex-col media-list overflow-auto scrollbar">
                {mediaList.map((item: MediaItemType) => {
                    return <MediaItem key={item.id} title={item.title} owner={item.owner} />
                })}
            </div>
            <AddMediaButton toggleModal={toggleModal} />
        </div>
    )
}

export default MediaList
