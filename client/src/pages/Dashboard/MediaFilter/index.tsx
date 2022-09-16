function MediaFilter() {
    return (
        <div className="w-full flex items-center media-filter px-5 border-b">
            <div className="bg-blue-500 w-7 h-7 mr-1"></div>
            <p className="open-sans">Search</p>
            <div className="flex mx-auto">
                <h2 className="text-xl open-sans-bold">All Tasks </h2>
            </div>
            <div className="flex ml-6">
                <div className="bg-blue-500 w-2 h-2 ml-0.5"></div>
                <div className="bg-blue-500 w-2 h-2 ml-0.5"></div>
                <div className="bg-blue-500 w-2 h-2 ml-0.5"></div>
            </div>
        </div>
    )
}

export default MediaFilter
