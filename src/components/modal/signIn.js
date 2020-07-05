import React, { useState } from "react"
import Google from "../../assets/svg/google.svg"
import CloseButton from "./closeButton"

export default function SignInModal({ openModal = 0,setOpenModal }) {
    return (
        <>
            {
                openModal === 1 ?
                    <div id="modal" className="modal flex-center">
                        < div className="modal-content flex-center" >
                            <CloseButton openModal={openModal} setOpenModal={setOpenModal} />
                            <div className="sign-with-google flex-center">
                                <img src={Google} alt="" /> <a href="https://kisalt-live.herokuapp.com/auth/google/">Google ile Giriş Yap</a> 
                            </div>
                        </div >

                    </div >
                    :
                    <div></div>
            }
        </>
    );

    
        }