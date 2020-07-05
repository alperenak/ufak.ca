import '../../App.css';
import React from "react"
import Logo from "./logo"
import SignIn from "./signIn"
import SignUp from "./signUp"
function Header() {
    return (
        <header className="header flex-center justify-between px-3">
            <Logo />
            <div className="flex-center">
                <SignIn />
                <SignUp />
            </div>
        </header>
    );
}

export default Header;
