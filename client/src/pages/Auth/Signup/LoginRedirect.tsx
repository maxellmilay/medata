type LoginRedirectProps = {
    handleAuthSwitch: () => void
}

function LoginRedirect({ handleAuthSwitch }: LoginRedirectProps) {
    return (
        <div className="bg-blue-400 w-2/5 h-full flex flex-col items-center justify-center">
            <h2 className="mb-5 font-bold text-3xl source-sans-pro">Welcome Back!</h2>
            <p className="mb-5 mx-10 text-center open-sans">To keep connected with us, please login with your personal info</p>
            <button className="border-2 border-black px-12 py-1.5 rounded-3xl source-sans-pro font-bold" onClick={handleAuthSwitch}>
                SIGN IN
            </button>
        </div>
    )
}

export default LoginRedirect
