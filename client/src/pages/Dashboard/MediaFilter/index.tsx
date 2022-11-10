import Settings from "./components/Settings"

function MediaFilter() {
    return (
        <div className="w-full flex items-center media-filter px-5 border-b">
            <div className="flex mx-auto">
                <h2 className="text-xl open-sans-bold">All Media </h2>
            </div>
            <div className="flex ml-6">
                <Settings />
            </div>
        </div>
    )
}

export default MediaFilter
