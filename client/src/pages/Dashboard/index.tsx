import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"

function Dashboard() {
    return (
        <div className="max-w-screen-2xl max-h-screen flex grow">
            <Profile />
            <div className="h-full w-10/12 flex flex-col">
                <MediaFilter />
                <div className="flex w-full grow">
                    <MediaList />
                    <MediaInfo />
                </div>
            </div>

        </div>
    )
}

export default Dashboard