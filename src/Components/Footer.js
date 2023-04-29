import React from "react";

export default function Footer(props)
{
    return(
        
            <button  className="footer_button" onClick={props.rollDice}>
                {props.value}
            </button>

        
    )
}