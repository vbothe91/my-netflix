import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./../utils/firebase";
import { LOGO_IMG_URL } from "./../constants/common";
import { addUser, removeUser } from "./../utils/userSlice";
 
const Header = () => {
    const [isSignInOptionVisible, setIsSignInOptionVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((store => store.user));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName, photoURL}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
          });

        return () => unsubscribe();
    }, []);


    const signOutHandler = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        })
    }

    const openSignOutOption = () => {
        setIsSignInOptionVisible(!isSignInOptionVisible);
    }

    return (
        <>
            <div className="absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
                <img
                    alt="logo"
                    className="w-44"
                    src={LOGO_IMG_URL}
                />
                {user && <div className="m-4 flex cursor-pointer" onClick={openSignOutOption}>
                        <img className="w-8 h-8 rounded-lg" src={user.photoURL} alt="profile-icon" />
                        <svg className="m-2" stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 17 7-8h-14z"></path></svg>
                        {isSignInOptionVisible && <div className="absolute text-white font-bold mt-12 flex cursor-pointer flex-row-reverse" onClick={signOutHandler}>Sign Out</div>}
                    </div>
                }
            </div>
        </>
    )
}

export default Header;
