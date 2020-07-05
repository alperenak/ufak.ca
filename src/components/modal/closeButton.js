import React from "react"

export default function CloseButton({openModal,setOpenModal}) {
    return (
        <div onClick={
            () => {
              setOpenModal(0)
            }
        } className="close flex-center">
            <div className="close-button f-b">x</div>
        </div>
    )
}