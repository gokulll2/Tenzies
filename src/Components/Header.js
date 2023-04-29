import React from "react";
import canbe from './assets/canbe.png'
export default function Header()
{

    return(
        <main className="header">
                <h1>
                    Dice Dash <span><img className="black-dice" src={canbe}/></span>
                </h1>
                <p>
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
        </main>
    )
}
