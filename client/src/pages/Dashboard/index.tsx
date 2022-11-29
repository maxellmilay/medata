import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"
import { useEffect, useState } from "react"
import axios from "axios"
import { MediaInfoType, MediaItemType } from "../../interface/MediaInterface"
import GeneralModal from '../../components/GeneralModal'
import SettingsModal from "./MediaFilter/components/SettingsModal"

interface DashboardPropsInterface {
    handleLogoutState: () => void
    email: string
}

function Dashboard({ handleLogoutState, email }: DashboardPropsInterface) {
    const [addModalOn, setAddModalOn] = useState(false)
    const [editModalOn, setEditModalOn] = useState(false)
    const [settingsModalOn, setSettingsModalOn] = useState(false)
    const [mediaList, setMediaList] = useState<MediaItemType[]>([] as MediaItemType[])
    const [currentMedia, setCurrentMedia] = useState<MediaInfoType>({ title: '', owner: '', type: '', synopsis: '', email: '' } as MediaInfoType)
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
    }

    async function handleMediaItemOnClick(id: String) {
        const currentLocalMedia = await axios.get(`http://localhost:5000/v1/media/item/${id}`)
        const currentMediaData = currentLocalMedia.data
        setCurrentMedia(currentMediaData)
        console.log("fetched item data", currentMedia.statusType);
        setCurrentMediaID(id)
    }

    function toggleAddModal() {
        setAddModalOn(!addModalOn)
    }

    function toggleEditModal() {
        setEditModalOn(!editModalOn)
    }

    function toggleSettingsModal() {
        setSettingsModalOn(!settingsModalOn)
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
                <MediaFilter toggleSettingsModal={toggleSettingsModal} />
                <div className="flex w-full">
                    <MediaList handleMediaItemOnClick={handleMediaItemOnClick} setCurrentMediaID={setCurrentMediaID} currentMedia={currentMedia} toggleEditModal={toggleEditModal} fetchMediaType={fetchMediaType} fetchAllMedia={fetchAllMedia} isDropped={isDropped} setIsDropped={setIsDropped} currentMediaType={currentMediaType} setCurrentMediaType={setCurrentMediaType} mediaTypes={mediaTypes} toggleAddModal={toggleAddModal} fetchMedia={fetchMedia} mediaList={mediaList} setCurrentMedia={setCurrentMedia} />
                    {currentMedia.title !== '' && <MediaInfo currentMediaID={currentMediaID} handleMediaItemOnClick={handleMediaItemOnClick} currentMedia={currentMedia} />}
                </div>
                <div className="w-full grow" />
            </div>
            {addModalOn && <GeneralModal modalType="ADD" currentMediaType={currentMediaType} currentMedia={currentMedia} fetchMedia={fetchMedia} fetchAllMedia={fetchAllMedia} currentMediaID={currentMediaID} fetchMediaType={fetchMediaType} handleMediaItemOnClick={handleMediaItemOnClick} handleResetMedia={handleResetMedia} toggleModal={toggleAddModal} />}
            {editModalOn && <GeneralModal modalType="EDIT" currentMediaType={currentMediaType} currentMedia={currentMedia} fetchMedia={fetchMedia} fetchAllMedia={fetchAllMedia} currentMediaID={currentMediaID} fetchMediaType={fetchMediaType} handleMediaItemOnClick={handleMediaItemOnClick} handleResetMedia={handleResetMedia} toggleModal={toggleEditModal} />}
            {settingsModalOn && <SettingsModal toggleModal={toggleSettingsModal}/>}
        </div>
    )
}

export default Dashboard
