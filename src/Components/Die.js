import React from "react";

export default function Die(props)
{
    const styles={
        backgroundColor: props.isheld ? "#59E391" : "white",
        // height: "20px",
        // width: "20px"
     }

     console.log(props);

     return(
             <div className={`overlay overlay${props.number}`} style={styles}
         onClick={props.holdDice}>

         </div>
 
     )
}