import { useState } from "react";
import { MediaInfoType } from '../../../interface/MediaInterface'
import axios from 'axios'

type EditMediaProps = {
    currentMediaType: String
    currentMedia: MediaInfoType
    fetchMedia: (type?: String) => Promise<void>
    toggleEditModal: () => void
    fetchAllMedia: () => Promise<void>
    currentMediaID: String
    fetchMediaType: () => Promise<void>
}

const EditMedia = ({ currentMedia, currentMediaID, toggleEditModal, currentMediaType, fetchMedia, fetchAllMedia, fetchMediaType }: EditMediaProps) => {
    const [newMedia, setNewMedia] = useState({ title: currentMedia.title, owner: currentMedia.owner, type: currentMedia.type, synopsis: currentMedia.synopsis, statusType: currentMedia.statusType, progress: currentMedia.progress, totalContent: currentMedia.totalContent })

    function handleMediaChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewMedia({ ...newMedia, [e.target.name]: e.target.value })
    }

    async function saveUpdatedMedia() {
        toggleEditModal();
        await axios.patch(`http://localhost:5000/v1/media/item/${currentMediaID}`, newMedia)
        fetchMediaType()
        currentMediaType === "All" ? fetchAllMedia() : fetchMedia();
    }

    async function handleDeleteMedia() {
        await axios.delete(`http://localhost:5000/v1/media/item/${currentMediaID}`)
        currentMediaType === "All" ? fetchAllMedia() : fetchMedia();
        toggleEditModal()

    }

    return (
        <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl">
                    <h1 className="mb-2">EDIT MEDIA</h1>
                    <div className="flex flex-col items-start px-5">
                        <div className="mb-2 w-full flex">
                            <label htmlFor="title" className="mr-2">Title: </label>
                            <input type="text" id="title" name='title' value={newMedia.title} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                        <div className="mb-2 w-full flex">
                            <label htmlFor="owner" className="mr-2">Owner: </label>
                            <input type="text" id="owner" name='owner' value={newMedia.owner} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                        <div className="mb-2 w-full flex">
                            <label htmlFor="type" className="mr-2">Type: </label>
                            <input type="text" id="type" name='type' value={newMedia.type} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                        <div className="mb-2 w-full flex">
                            <label htmlFor="synopsis" className="mr-2">Synopsis: </label>
                            <input type="text" id="synopsis" name='synopsis' value={newMedia.synopsis} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                        <div className="mb-2 w-full flex">
                            <label htmlFor="statusType" className="mr-2">Status Type: </label>
                            <input type="text" id="statusType" name='statusType' value={newMedia.statusType} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                        <div className="mb-2 w-full flex">
                            <label htmlFor="progress" className="mr-2">Progress: </label>
                            <input type="number" id="progress" name='progress' value={newMedia.progress} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                        <div className="mb-2 w-full flex">
                            <label htmlFor="totalContent" className="mr-2">Total: </label>
                            <input type="number" id="totalContent" name='totalContent' value={newMedia.totalContent} onChange={e => handleMediaChange(e)} className="grow" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-green-400 p-2 mr-5" onClick={saveUpdatedMedia}>SAVE</button>
                        <button className="bg-red-400 p-2 mr-5" onClick={() => toggleEditModal()}>EXIT</button>
                        <button className="bg-gray-600 p-2" onClick={handleDeleteMedia}>DELETE</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditMedia

