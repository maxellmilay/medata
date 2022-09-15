function FriendList() {
    return (
        <div className="w-full flex flex-col px-10 py-6 justify-center bg-red-400 friend-list">
            <h3 className="font-bold text-sm open-sans">FRIENDS</h3>
            <div className="flex mt-2">
                <div className="bg-black w-4 h-4 mr-1 open-sans"></div>
                <div className="bg-black w-4 h-4 mr-1 open-sans"></div>
                <div className="bg-black w-4 h-4 mr-1 open-sans"></div>
                <div className="bg-black w-4 h-4 mr-1 open-sans"></div>
            </div>
        </div>
    )
}

export default FriendList
