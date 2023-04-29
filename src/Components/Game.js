import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid" 
export default function Game(props)
{
    const[dice,setDice]=React.useState(allnewDice())

    const[Tenzies,setTenzies]=React.useState(false)

    React.useEffect(() => [

    ])

    function data()
    {
        return{
        number:Math.floor(Math.random()*6),
        isheld:false,
        id:nanoid
        }
    }
    function allnewDice()
    {
        const newArray=[];
        for(let i=0;i<10;i++)
        {
            newArray.push(data)
        }
        return newArray
    }
    function rollDice()
    {
        setDice(oldDice => oldDice.map(die => {
            return die.isheld ? die : data()
        })
        )
    }
    function holdDice(id)
    {
        setDice(oldDice => oldDice.map(die => {

            return die.id===id ? {...die,isheld:!die.isheld} :die

        }))
    }

    const diceElements=dice.map(die=>{
        <Die
        key={die.id}
        number={die.number}
        isheld={die.isheld}
        holdDice={()=>holdDice(die.id)}
        />
    })
   
   return(
<main>
    
</main>
   )
}