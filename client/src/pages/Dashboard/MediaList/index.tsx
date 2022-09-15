import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"

function MediaList() {
    return (
        <div className="flex flex-col w-2/5 max-w-4xl bg-green-500">
            <TypeTitle />
            <div className="flex flex-col media-item overflow-auto">
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