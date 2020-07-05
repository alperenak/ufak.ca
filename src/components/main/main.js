import '../../App.css';
import React from "react"
import InputURL from "./inputURL"
import Wave from "./wave"
function Main() {
    return (
        <main className="main flex-center flex-dir-col text-shadow">
            <h1 className="f-b ">UFAKÇA BİR İŞİMİZ VAR</h1>
            <h2 className="f-r">Ufaltmak istediğin o devasa uzunluktaki bağlantı adresini gir</h2>
            <InputURL/>
            <Wave/>
        </main>
    );
}

export default Main;
