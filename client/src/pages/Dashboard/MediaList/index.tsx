import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"

function MediaList() {
    return (
        <div className="flex flex-col w-2/5 max-w-4xl border-b">
            <TypeTitle />
            <div className="flex flex-col media-item overflow-auto scrollbar">
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
            </div>
        </div>
    )
}

export default MediaList
