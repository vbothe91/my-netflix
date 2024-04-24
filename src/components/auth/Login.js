import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import Header from "../layout/Header";
import { BANNER_IMG_URL, AVATAR_URL } from "../../constants/common";
import { validateLoginInput } from "../../utils/validator";
import { auth } from "../../utils/firebase/firebase";
import { addUser } from "../../utils/store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [validationError, setValidationError] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const dispatch = useDispatch();

    const toggleSignUpHandler = () => {
        setIsSignInForm(!isSignInForm);
        setValidationError(null);
        setLoginError(null);
    }

    const loginHandler = () => {
        const validationError = validateLoginInput(
            email.current.value,
            password.current.value,
            fullName.current?.value,
            isSignInForm);

        setValidationError(validationError);

        if (validationError) return;

        if(isSignInForm) {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {})
            .catch((error) => {
                setLoginError(error.message);
            });
        } else {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: fullName.current.value,
                    photoURL: AVATAR_URL
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid, email, displayName, photoURL}))
                  }).catch((error) => {
                    setLoginError(error.message);
                  });
            })
            .catch((error) => {
                setLoginError(error.message);
            });
        }
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

            <form onSubmit={(e) => e.preventDefault()} className="absolute px-14 py-10 bg-black w-1/3 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h3 className="py-6 font-bold text-3xl">{isSignInForm ? `Sign In` : `Sign Up`}</h3>
                
                {loginError && <div className="p-3 my-3 text-black rounded-sm bg-yellow-600">{loginError}</div>}

                {!isSignInForm && <input
                    ref={fullName}
                    type="text"
                    placeholder="Full Name"
                    className="px-6 py-3 my-3 w-full rounded-sm bg-transparent border-white border"
                />}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="px-6 py-3 my-3 w-full rounded-sm bg-transparent border-white border"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="px-6 py-3 my-3 w-full rounded-sm bg-transparent border-white border"
                />

                {validationError && <p className="text-red-700 py-2 font-bold">{validationError}</p>}

                <button onClick={loginHandler} className="p-4 my-5 w-full rounded-sm bg-red-700">
                    {isSignInForm ? `Sign In` : `Sign Up`}
                </button>

                {isSignInForm && <p className="py-2">New to Netflix? <span className="font-bold cursor-pointer" onClick={toggleSignUpHandler}>Sign up now.</span></p>}
                {!isSignInForm && <p className="py-2">Already registered? <span className="font-bold cursor-pointer" onClick={toggleSignUpHandler}>Sign in now.</span></p>}
            </form>
        </div>
    )
}

export default Login;
