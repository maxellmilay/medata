import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"
import AddMedia from "./AddMedia"
import { useState } from "react"

function Dashboard() {
    const [modalOn, setModalOn] = useState(false)

    function toggleModal() {
        setModalOn(!modalOn)
    }

    return (
        <div className="h-full flex relative">
            <Profile />
            <div className="h-full grow flex flex-col">
                <MediaFilter />
                <div className="flex w-full">
                    <MediaList toggleModal={toggleModal} />
                    <MediaInfo />
                </div>
                <div className="w-full grow" />
            </div>
            {modalOn && <AddMedia toggleModal={toggleModal} />}
        </div>
    )
}

export default Dashboard
