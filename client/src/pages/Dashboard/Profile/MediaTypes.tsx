import axios from "axios"
import React, { useEffect, useState } from "react"

function MediaTypes() {
    const [mediaTypes, setMediaTypes] = useState<String[]>([] as String[])

    async function fetchMediaType() {
        const response = await axios.get('http://localhost:5000/v1/media/types')
        const responseMediaTypes = response.data
        setMediaTypes(responseMediaTypes)
    }

    useEffect(() => {
        fetchMediaType()
    }, [])

    return (
        <div className="w-full px-10 py-3.5 media-types border-b">
            <h3 className="mb-1 font-bold open-sans">
                TYPES
            </h3>
            <div className="overflow-auto scrollbar w-full media-type-list">
                {mediaTypes.map((type: String) => {
                    return <p key={type as React.Key} className="mt-1 text-xs open-sans">{type}</p>
                })}
            </div>
        </div>
    )
}
export default MediaTypes
