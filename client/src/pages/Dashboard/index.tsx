import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"
import AddMedia from "./AddMedia"
import { useEffect, useState } from "react"
import axios from "axios"
import { MediaInfoType, MediaItemType } from "../../interface/MediaInterface"

function Dashboard() {
    const [modalOn, setModalOn] = useState(false)
    const [mediaList, setMediaList] = useState<MediaItemType[]>([] as MediaItemType[])
    const [currentMedia, setCurrentMedia] = useState<MediaInfoType>({ title: '', owner: '', type: '', synopsis: '' } as MediaInfoType)
    const [mediaTypes, setMediaTypes] = useState<String[]>([] as String[])
    const [currentMediaType, setCurrentMediaType] = useState<String>('All')
    const [isDropped, setIsDropped] = useState<Boolean>(false)


    async function fetchMediaType() {
        const response = await axios.get('http://localhost:5000/v1/media/types')
        const responseMediaTypes = response.data
        setMediaTypes(responseMediaTypes)
    }

    async function fetchMedia(type?: String) {
        const queryType = type || currentMediaType
        const response = await axios.get(`http://localhost:5000/v1/media/items/?type=${queryType}`)
        const responseMediaData = response.data
        setMediaList(responseMediaData)
    }

    async function fetchAllMedia() {
        const response = await axios.get('http://localhost:5000/v1/media/allItems')
        const responseMediaData = response.data
        setMediaList(responseMediaData)
    }

    function toggleModal() {
        setModalOn(!modalOn)
    }

    useEffect(() => {
        fetchAllMedia()
    }, [])

    return (
        <div className="h-full flex relative">
            <Profile fetchMedia={fetchMedia} setCurrentMediaType={setCurrentMediaType} mediaTypes={mediaTypes} fetchMediaType={fetchMediaType} />
            <div className="h-full grow flex flex-col">
                <MediaFilter />
                <div className="flex w-full">
                    <MediaList fetchAllMedia={fetchAllMedia} isDropped={isDropped} setIsDropped={setIsDropped} currentMediaType={currentMediaType} setCurrentMediaType={setCurrentMediaType} mediaTypes={mediaTypes} toggleModal={toggleModal} fetchMedia={fetchMedia} mediaList={mediaList} setCurrentMedia={setCurrentMedia} />
                    {currentMedia.title !== '' && <MediaInfo currentMedia={currentMedia} />}
                </div>
                <div className="w-full grow" />
            </div>
            {modalOn && <AddMedia toggleModal={toggleModal} fetchMedia={fetchMedia} />}
        </div>
    )
}

export default Dashboard
