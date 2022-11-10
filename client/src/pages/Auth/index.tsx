import { useNavigate } from "react-router-dom";
import SingupContainer from "./Signup";
import SignupRedirect from "./Login/SignupRedirect";
import LoginRedirect from "./Signup/LoginRedirect";
import LoginContainer from "./Login";
import { useState } from "react";
import { FrontendRoute } from "../../enums/Routes";

function Auth() {
    const navigate = useNavigate();
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    function handleLogin(): void {
        navigate(FrontendRoute.DASHBOARD);
    }

    function handleAuthSwitch(): void {
        setIsLoggingIn(!isLoggingIn)
    }

    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="bg-blue-300 w-3/5 h-3/4 flex">
                {isLoggingIn
                    ? <><LoginContainer handleLogin={handleLogin} /><SignupRedirect handleAuthSwitch={handleAuthSwitch} /></>
                    : <><LoginRedirect handleAuthSwitch={handleAuthSwitch} /><SingupContainer /> </>}

            </div>
        </div>
    )
}

export default Auth;
