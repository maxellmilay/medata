import React from 'react'
import { ProgressStatus } from '../enums/ProgressStatus'

interface ProgressDropdownPropsInterface {
    setSelectedStatus: React.Dispatch<React.SetStateAction<string>>
    handleDropdown: () => void
    handleProgressChange: (type: string) => void
}

const ProgressDropdown = ({ setSelectedStatus, handleDropdown, handleProgressChange }: ProgressDropdownPropsInterface) => {

    function handleDropdownClick(type: string) {
        setSelectedStatus(type)
        handleProgressChange(type)
        handleDropdown()
    }

    return (
        <div className='absolute flex flex-col bg-white progress-dropdown border-l border-t border-r border-black'>
            <button className='p-1 border-b border-black' onClick={() => handleDropdownClick(ProgressStatus.IN_PROGRESS)}>In Progress</button>
            <button className='p-1 border-b border-black' onClick={() => handleDropdownClick(ProgressStatus.COMPLETED)}>Completed</button>
            <button className='p-1 border-b border-black' onClick={() => handleDropdownClick(ProgressStatus.NONE)}>None</button>
        </div>
    )
}

export default ProgressDropdown
