import React, { useState } from 'react';
import '../../App.css';
import Link from "../../assets/svg/link.svg"
function InputURL() {
    const [value, setValue] = useState("")

    return (
        <div className="inputURL-div f-b">
            <img src={Link}/>
            <input className="inputURL text-shadow" placeholder="https://" value={value} onChange={(e) => setValue(e.target.value)} />
            <div onClick={()=>{
                fetch('https://api.ufak.ca/create-link', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        //'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1ZjAwODcxYTU3N2E3OTAwMTc2ZWM2OGIiLCJuYW1lIjoixLBicmFoaW0gTWVyY2FuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdoeVFhQUxNaXlieTBVUUJBUEdwdENSMlJ4SGo5VTFZMmNZOXExc1ZRIiwiaWF0IjoxNTkzODcwMTA2LCJleHAiOjE1OTY0NjIxMDZ9.Tk5HfVHCpsHi9JRvb1AfcsGjvFfJE8MeLApBgmUgXG4'
                        // Cookie de token varsa verilecek yoksa x-access-token verilmeden istek atılacak.
                    },
                    body: JSON.stringify({ 
                        link: value, // Kısaltılıcak Link
                    })
                }).then(res => res.json()).then(response => console.log(response));
            }} className="convert-button flex-center">ufalt</div>
            <div className="lds-hourglass"></div>
        </div>
    );
}

export default InputURL;
