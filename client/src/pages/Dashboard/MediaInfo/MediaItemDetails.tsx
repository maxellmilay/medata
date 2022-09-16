function MediaItemDetails() {
    return (
        <div className="flex grow w-full px-7 overflow-auto media-item border scrollbar">
            <div className="flex h-full justify-center w-1/12">
                <div className="bg-blue-500 w-7 h-7 mt-11"></div>
            </div>
            <div className="flex flex-col h-full w-10/12 pr-5 py-10">
                <h2 className="w-full text-2xl font-bold mb-3 open-sans">Prepare offers for new clients</h2>
                <p className="w-full text-xs mb-14 open-sans">10 Sep, 2022</p>
                <p className="w-full mb-10 open-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr className="bg-black h-1 border-0 mb-10" />
                <p className="w-full mb-10 open-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className="h-full w-1/12"></div>
        </div>
    )
}

export default MediaItemDetails
