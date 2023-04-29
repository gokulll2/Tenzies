import React from "react"
import Header from "./Header"
import Game from "./Game"

export default function MainContent()
{
    return (
        <div className="MainCont">
            <Header/>
            <Game/>
        </div>
    );
}