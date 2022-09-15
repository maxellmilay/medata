function MediaFilter() {
    return (
        <div className="w-full flex bg-green-300 items-center media-filter px-5">
            <div className="bg-black w-7 h-7 mr-1"></div>
            <p>Search</p>
            <div className="flex mx-auto">
                <h2 className=" font-bold text-xl">All Tasks </h2>
                <div className="bg-black w-7 h-7 ml-2"></div>
            </div>
            <div className="flex">
                <div className="bg-black w-2 h-2 ml-0.5"></div>
                <div className="bg-black w-2 h-2 ml-0.5"></div>
                <div className="bg-black w-2 h-2 ml-0.5"></div>
            </div>
        </div>
    )
}

export default MediaFilter
