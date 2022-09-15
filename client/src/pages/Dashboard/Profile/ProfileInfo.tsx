function ProfileInfo() {
    return (
        <div className="w-full flex flex-col bg-green-700 items-center px-5 py-5 profile-info">
            <div className="w-32 h-32 bg-black"></div>
            <h3 className="mt-1.5 font-bold open-sans-bold">Maxell Milay</h3>
            <p className="open-sans">milaymaxell@gmail.com</p>
            <div className="flex justify-between mt-4">
                <div className="bg-black w-7 h-7 mr-3"></div>
                <div className="bg-black w-7 h-7 mr-3"></div>
                <div className="bg-black w-7 h-7"></div>
            </div>
            <div className="flex mt-2.5">
                <div className="flex flex-col items-center w-20">
                    <p className="font-bold open-sans">12</p>
                    <p className="text-xs open-sans">Completed</p>
                    <p className="text-xs open-sans">Tasks</p>
                </div>
                <div className="flex flex-col items-center w-20">
                    <p className="font-bold open-sans">22</p>
                    <p className="text-xs open-sans">To do</p>
                    <p className="text-xs open-sans">Tasks</p>
                </div>
                <div className="flex flex-col items-center w-20">
                    <p className="font-bold open-sans">243</p>
                    <p className="text-xs open-sans">All</p>
                    <p className="text-xs open-sans">Workload</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
