type TypeDropDownProps = {
    mediaTypes: String[]
    setCurrentMediaType: React.Dispatch<React.SetStateAction<String>>
    fetchMedia: (type?: String) => Promise<void>
    handleDrop: () => void
}

function TypeDropDown({ mediaTypes, setCurrentMediaType, fetchMedia, handleDrop }: TypeDropDownProps) {

    function handleTypeDropDownClick(type: String) {
        setCurrentMediaType(type)
        fetchMedia(type)
        handleDrop()
    }

    return (
        <div className="flex flex-col absolute bg-red-400 top-20 w-full items-center py-2">
            {mediaTypes.map((type) => {
                return <button className="mb-1" onClick={() => handleTypeDropDownClick(type)}>{type}</button>
            })}
        </div>
    )
}

export default TypeDropDown
