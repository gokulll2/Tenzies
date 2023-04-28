import React from "react";
export default function Header(props)
{
    console.log(props.x)

    return(
        <main className="header">
                <h1>
                    Tenzies
                </h1>
                <p>
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
        </main>
    )
}
