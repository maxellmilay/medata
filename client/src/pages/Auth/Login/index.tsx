type LoginContainerProps = {
    handleLogin: () => void
}

function LoginContainer({ handleLogin }: LoginContainerProps) {
    return (
        <div className="h-full w-3/5 flex flex-col justify-center items-center">
            <h1 className="mb-5 font-bold text-4xl source-sans-pro front-bold">Login</h1>
            <div className="mb-3 open-sans" >Link container</div>
            <input type="text" placeholder="Email" className="mb-3" />
            <input type="password" placeholder="Password" className="mb-5" />
            <button className="border-2 border-black bg-black text-white px-12 py-1.5 rounded-3xl source-sans-pro front-bold" onClick={() => handleLogin()}>SIGN IN</button>
        </div>
    )
}

export default LoginContainer;
