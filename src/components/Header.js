import { LOGO_IMG_URL } from "./../constants/common";

const Header = () => {
    return (
        <div className="absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10">
            <img
                alt="logo"
                className="w-44"
                src={LOGO_IMG_URL}
            />
        </div>
    )
}

export default Header;
