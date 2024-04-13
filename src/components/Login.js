import { useState } from "react";
import Header from "./Header";
import { BANNER_IMG_URL } from "./../constants/common";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignUpHandler = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />

            <div className="absolute">
                <img
                    alt="banner"
                    src={BANNER_IMG_URL}
                />
            </div>

            <form className="absolute px-14 py-10 bg-black w-1/3 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h3 className="py-6 font-bold text-3xl">{isSignInForm ? `Sign In` : `Sign Up`}</h3>
                {!isSignInForm && <input
                    type="text"
                    placeholder="Full Namme"
                    className="px-6 py-3 my-3 w-full rounded-sm bg-transparent border-white border"
                />}
                <input
                    type="text"
                    placeholder="Email Address"
                    className="px-6 py-3 my-3 w-full rounded-sm bg-transparent border-white border"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-6 py-3 my-3 w-full rounded-sm bg-transparent border-white border"
                />
                <button className="p-4 my-5 w-full rounded-sm bg-red-700">
                    {isSignInForm ? `Sign In` : `Sign Up`}
                </button>

                {isSignInForm && <p className="py-2">New to Netflix? <span className="font-bold cursor-pointer" onClick={toggleSignUpHandler}>Sign up now.</span></p>}
                {!isSignInForm && <p className="py-2">Already registered? <span className="font-bold cursor-pointer" onClick={toggleSignUpHandler}>Sign in now.</span></p>}
            </form>
        </div>
    )
}

export default Login;
