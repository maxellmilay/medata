import { useEffect, useState } from "react"
import { StatusNumbers } from "../../../interface/MediaInterface"
import axios from 'axios'

function ProfileInfo() {
    const [statusNumbers, setStatusNumbers] = useState<StatusNumbers>()

    async function fetchStatusInfo() {
        const response = await axios.get('http://localhost:5000/v1/media/status')
        const responseStatusNumbers = response.data
        setStatusNumbers(responseStatusNumbers)
    }

    useEffect(() => {
        fetchStatusInfo()
    }, [])

    return (
        <div className="w-full flex flex-col items-center px-5 py-5 profile-info border-b">
            <div className="w-32 h-32 bg-blue-500"></div>
            <h3 className="mt-1.5 font-bold open-sans-bold">Maxell Milay</h3>
            <p className="open-sans text-xs">milaymaxell@gmail.com</p>
            <div className="flex justify-between mt-4">
                <div className="bg-blue-500 w-7 h-7 mr-3"></div>
                <div className="bg-blue-500 w-7 h-7 mr-3"></div>
                <div className="bg-blue-500 w-7 h-7"></div>
            </div>
            <div className="flex mt-2.5 mb-1">
                <div className="flex flex-col items-center w-20">
                    <p className="font-bold open-sans text-sm">{statusNumbers?.completed}</p>
                    <p className="xxs open-sans">Completed</p>
                </div>
                <div className="flex flex-col items-center w-20">
                    <p className="font-bold open-sans text-sm">{statusNumbers?.inProgress}</p>
                    <p className="xxs open-sans">In Progress</p>
                </div>
            </div>
            <div className="flex flex-col items-center w-20">
                <p className="font-bold open-sans text-sm">{statusNumbers?.total}</p>
                <p className="xxs open-sans">Total Media</p>
            </div>
        </div>
    )
}

export default ProfileInfo
