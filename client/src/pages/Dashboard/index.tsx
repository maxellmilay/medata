import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"

function Dashboard() {
    return (
        <div className="h-full flex relative">
            <Profile />
            <div className="h-full grow flex flex-col">
                <MediaFilter />
                <div className="flex w-full">
                    <MediaList />
                    <MediaInfo />
                </div>
                <div className="w-full grow" />
            </div>

        </div>
    )
}

export default Dashboard
