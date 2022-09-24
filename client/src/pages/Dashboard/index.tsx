import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"
import AddMedia from "./AddMedia"
import { useState } from "react"
import axios from "axios"
import { MediaItemType } from "../../interface/MediaInterface"

function Dashboard() {
    const [modalOn, setModalOn] = useState(false)
    const [mediaList, setMediaList] = useState<MediaItemType[]>([] as MediaItemType[])

    async function fetchMedia() {
        const response = await axios.get('http://localhost:5000/v1/media/items')
        const responseMediaData = response.data
        setMediaList(responseMediaData)
    }

    function toggleModal() {
        setModalOn(!modalOn)
    }

    return (
        <div className="h-full flex relative">
            <Profile />
            <div className="h-full grow flex flex-col">
                <MediaFilter />
                <div className="flex w-full">
                    <MediaList toggleModal={toggleModal} fetchMedia={fetchMedia} mediaList={mediaList} />
                    <MediaInfo />
                </div>
                <div className="w-full grow" />
            </div>
            {modalOn && <AddMedia toggleModal={toggleModal} fetchMedia={fetchMedia} />}
        </div>
    )
}

export default Dashboard
