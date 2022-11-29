import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"
import AddMedia from "./AddMedia"
import { useEffect, useState } from "react"
import axios from "axios"
import { MediaInfoType, MediaItemType } from "../../interface/MediaInterface"
import EditMedia from "./EditMedia"

interface DashboardPropsInterface {
    handleLogoutState: () => void
    email: string
}

function Dashboard({ handleLogoutState, email }: DashboardPropsInterface) {
    const [modalOn, setModalOn] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [mediaList, setMediaList] = useState<MediaItemType[]>([] as MediaItemType[])
    const [currentMedia, setCurrentMedia] = useState<MediaInfoType>({ title: '', owner: '', type: '', synopsis: '' } as MediaInfoType)
    const [mediaTypes, setMediaTypes] = useState<String[]>([] as String[])
    const [currentMediaType, setCurrentMediaType] = useState<String>('All')
    const [isDropped, setIsDropped] = useState<Boolean>(false)
    const [currentMediaID, setCurrentMediaID] = useState<String>('')

    async function fetchMediaType() {
        const response = await axios.get(`http://localhost:5000/v1/media/types/?email=${email}`)
        const responseMediaTypes = response.data
        setMediaTypes(responseMediaTypes)
    }

    async function fetchMedia(type?: String) {
        const queryType = type || currentMediaType
        const response = await axios.get(`http://localhost:5000/v1/media/items/?type=${queryType}&email=${email}`)
        const responseMediaData = response.data
        setMediaList(responseMediaData)

    }

    async function fetchAllMedia() {
        const response = await axios.get(`http://localhost:5000/v1/media/allItems/?email=${email}`)
        const responseMediaData = response.data
        setMediaList(responseMediaData)
        console.log(response);

    }

    async function handleMediaItemOnClick(id: String) {
        const currentMedia = await axios.get(`http://localhost:5000/v1/media/item/${id}`)
        const currentMediaData = currentMedia.data
        setCurrentMedia(currentMediaData)
        setCurrentMediaID(id)
    }

    function toggleModal() {
        setModalOn(!modalOn)
    }

    function toggleEditModal() {
        setEditModal(!editModal)
    }

    function handleResetMedia() {
        setCurrentMedia({ title: '', owner: '', type: '', synopsis: '' } as MediaInfoType)
    }

    useEffect(() => {
        fetchAllMedia()
    }, [])

    return (
        <div className="h-full flex relative">
            <Profile handleLogoutState={handleLogoutState} mediaList={mediaList} fetchMedia={fetchMedia} setCurrentMediaType={setCurrentMediaType} mediaTypes={mediaTypes} fetchMediaType={fetchMediaType} />
            <div className="h-full grow flex flex-col">
                <MediaFilter />
                <div className="flex w-full">
                    <MediaList handleMediaItemOnClick={handleMediaItemOnClick} setCurrentMediaID={setCurrentMediaID} currentMedia={currentMedia} toggleEditModal={toggleEditModal} fetchMediaType={fetchMediaType} fetchAllMedia={fetchAllMedia} isDropped={isDropped} setIsDropped={setIsDropped} currentMediaType={currentMediaType} setCurrentMediaType={setCurrentMediaType} mediaTypes={mediaTypes} toggleModal={toggleModal} fetchMedia={fetchMedia} mediaList={mediaList} setCurrentMedia={setCurrentMedia} />
                    {currentMedia.title !== '' && <MediaInfo currentMediaID={currentMediaID} handleMediaItemOnClick={handleMediaItemOnClick} currentMedia={currentMedia} />}
                </div>
                <div className="w-full grow" />
            </div>
            {modalOn && <AddMedia currentMediaType={currentMediaType} toggleModal={toggleModal} fetchMedia={fetchMedia} fetchAllMedia={fetchAllMedia} fetchMediaType={fetchMediaType} />}
            {editModal && <EditMedia handleResetMedia={handleResetMedia} handleMediaItemOnClick={handleMediaItemOnClick} currentMedia={currentMedia} currentMediaType={currentMediaType} fetchMediaType={fetchMediaType} currentMediaID={currentMediaID} fetchAllMedia={fetchAllMedia} toggleEditModal={toggleEditModal} fetchMedia={fetchMedia} />}
        </div>
    )
}

export default Dashboard
