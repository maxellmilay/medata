function MediaItem() {
    return (
        <div className="w-full flex px-5 py-5 items-center border bg-gray-100">
            <div className="bg-blue-500 w-7 h-7 mr-3"></div>
            <div className="flex flex-col grow">
                <p className="open-sans">Prepare offers for new clients</p>
                <p className="text-xs open-sans">10 Sep, 2022</p>
            </div>
            <div className="bg-blue-500 w-10 h-10 ml-3"></div>
        </div>
    )
}

export default MediaItem
