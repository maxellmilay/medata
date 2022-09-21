import { useEffect, useState } from "react"
import { MediaItemType } from "../../../interface/MediaInterface"
import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"
import axios from 'axios'

function MediaList() {
    const [mediaList, setMediaList] = useState<MediaItemType[]>([] as MediaItemType[])

    async function fetchMedia() {
        const response = await axios.get('http://localhost:5000/v1/media/items')
        const responseMediaData = response.data
        setMediaList(responseMediaData)
    }

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
        </div>
    )
}

export default MediaList
