import '../../App.css';
import React, { useState } from "react"
import SignUpModal from "../modal/signUp"
function SignUp() {
    const [modal, setModal] = useState(0)
    return (
        <>
            <SignUpModal openModal={modal} setOpenModal={setModal} />
            <div className="signUp">
                <a onClick={() => {setModal(1)}} className="signup-button f-b">Kayıt Ol</a>
            </div>
        </>
    );
}

export default SignUp;
