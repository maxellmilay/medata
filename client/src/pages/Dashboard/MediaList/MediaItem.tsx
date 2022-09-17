type MediaItemProps = {
    title: String
    owner: String
}

function MediaItem({ title, owner }: MediaItemProps) {
    return (
        <div className="w-full flex px-5 py-5 items-center border bg-gray-100">
            <div className="bg-blue-500 w-7 h-7 mr-3"></div>
            <div className="flex flex-col grow">
                <p className="open-sans text-sm font-bold">{title}</p>
                <p className="xxs open-sans">{owner}</p>
            </div>
            <div className="bg-blue-500 w-10 h-10 ml-3"></div>
        </div>
    )
}

export default MediaItem
