import { ToggleModalType } from "../../../interface/MediaInterface"

function AddMedia({ toggleModal }: ToggleModalType) {


    return (
        <div className="bg-zinc-200 bg-opacity-80 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl">
                    <h1>Add Media</h1>
                    <button className="bg-red-400 p-2" onClick={toggleModal}>EXIT</button>
                </div>
            </div>
        </div>
    )
}

export default AddMedia
