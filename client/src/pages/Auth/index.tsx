import { useNavigate } from "react-router-dom";
import SingupContainer from "./Signup";
import SignupRedirect from "./Login/SignupRedirect";
import LoginRedirect from "./Signup/LoginRedirect";
import LoginContainer from "./Login";
import { useEffect, useState } from "react";
import { FrontendRoute } from "../../enums/Routes";
import { login } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface AuthPropsInterface {
    handleLoggedInState: () => void
    isLoggedIn: boolean
}

function Auth({ handleLoggedInState, isLoggedIn }: AuthPropsInterface) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate(FrontendRoute.DASHBOARD)
        }
    }, [isLoggedIn])

    async function handleLogin() {
        try {
            await login(dispatch, handleLoggedInState)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-screen w-screen grid place-items-center">
            <button onClick={handleLogin} className="bg-blue-300 p-6 flex">LOGIN WITH GOOGLE</button>
        </div>
    )
}

export default Auth;
