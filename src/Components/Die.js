import React from "react";
export default function Die(props)
{
    const styles={
        backgroundcolor: props.isheld ? "#59E391" : "white"
     }
     return(
         <div 
         className="die-face"
         style={styles}
         onClick={props.holdDice}>
             <div className={`overlay overlay${props.number}`}></div>
         </div>
 
     )
}