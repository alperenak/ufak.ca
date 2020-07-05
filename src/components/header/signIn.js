import '../../App.css';
import React, { useState } from "react"
import SignInModal from "../modal/signIn"
function SignIn() {
    const [modal, setModal] = useState(0)
    return (
        <>
            <SignInModal openModal={modal} setOpenModal={setModal} />
            <div className="signIn">
                <div onClick={()=> setModal(1)} className="signIn-button f-b"> Giriş Yap</div>
            </div>
        </>
    );
}

export default SignIn;
