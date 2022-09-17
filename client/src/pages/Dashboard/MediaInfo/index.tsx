function MediaInfo() {
    return (
        <div className="flex flex-col grow w-3/5 px-10 py-5 overflow-auto media-item border scrollbar">
            <div className="flex flex-col text-center items-center mb-3">
                <h1 className="mb-2 text-2xl font-bold">Dr. Stone</h1>
                <div className="bg-blue-500 block w-80 media-pic mb-3"></div>
                <p className="mb-3 text-xs">TMS Entertainment</p>
                <div className="flex mb-3 px-5 py-3 bg-gray-100 rounded">
                    <div className="mr-4 px-1 py-1 bg-white border border-gray-400 rounded">
                        <p>Watching</p>
                    </div>
                    <div className="px-1 py-1 bg-white border border-gray-400 rounded">
                        <p>Progress:  18/24</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-justify">
                    After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone.

                    Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified.

                    However, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.
                </p>
            </div>
        </div >
    )
}

export default MediaInfo
