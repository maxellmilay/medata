import Logout from "./components/Logout"
import { logout } from "../../../services/auth"
import { useNavigate } from "react-router-dom"
import { FrontendRoute } from "../../../enums/Routes"

interface MiscPropsInterface {
    handleLogoutState: () => void
}

function Misc({ handleLogoutState }: MiscPropsInterface) {
    const navigate = useNavigate()
    function handleLogoutButtonClick() {
        logout()
        handleLogoutState()
        navigate(FrontendRoute.LOGIN)
    }

    return (
        <button onClick={handleLogoutButtonClick} className="w-full flex px-5 py-6 space-between friend-list border-t">
            <Logout />
            <p>Logout</p>
        </button>
    )
}

export default Misc
