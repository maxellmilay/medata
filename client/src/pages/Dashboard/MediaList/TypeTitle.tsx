import TypeDropDown from "./TypeDropDown"

type TypeTitleProps = {
    mediaTypes: String[]
    currentMediaType: String
    setCurrentMediaType: React.Dispatch<React.SetStateAction<String>>
    fetchMedia: (type?: String) => Promise<void>
    isDropped: Boolean
    setIsDropped: React.Dispatch<React.SetStateAction<Boolean>>
}

function TypeTitle({ mediaTypes, currentMediaType, setCurrentMediaType, fetchMedia, isDropped, setIsDropped }: TypeTitleProps) {

    function handleDrop() {
        setIsDropped(!isDropped)
    }

    return (
        <div className="flex items-center font-bold h-20 border-b relative w-full">
            <button className="flex h-full items-center w-full" onClick={handleDrop}>
                <h1 className="ml-10 mr-auto open-sans font-bold">{currentMediaType}</h1>
                <div className="bg-blue-500 w-7 h-7 mr-10"></div>
            </button>
            {isDropped && <TypeDropDown handleDrop={handleDrop} mediaTypes={mediaTypes} setCurrentMediaType={setCurrentMediaType} fetchMedia={fetchMedia} />}
        </div>

    )
}

export default TypeTitle
