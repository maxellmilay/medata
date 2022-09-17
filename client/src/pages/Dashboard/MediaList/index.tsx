import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"

function MediaList() {
    return (
        <div className="flex flex-col w-2/5 max-w-4xl border-b">
            <TypeTitle />
            <div className="flex flex-col media-list overflow-auto scrollbar">
                <MediaItem title="Dr. Stone" owner="TMS Entertainment" />
                <MediaItem title="Fire Force" owner="David Production" />
                <MediaItem title="Haikyuu!!" owner="Production I.G" />
            </div>
        </div>
    )
}

export default MediaList
