import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid" 
import Footer from "./Footer";
import Confetti from "react-confetti"
export default function Game(props)
{
    const[dice,setDice]=React.useState(allnewDice())

    const[Dash,setDash]=React.useState(false)

    // React.useEffect(() => [

    // ])
    React.useEffect(() => {
        const allHeld=dice.every(die => die.isheld)
        const everyNum= dice[0].number
        const allSameNumber=dice.every(die => die.number === everyNum)
        
        if(allHeld && allSameNumber)
        {
            setDash(true)
            console.log('You Won')
        }
    },[dice])

    function data()
    {
        return{
        number:Math.floor(Math.random()*6)+1,
        isheld:false,
        id:nanoid()
        }
    }
    function allnewDice()
    {
        const newArray=[];
        for(let i=1;i<=10;i++)
        {
            newArray.push(data())
        }
        return newArray
    }
    function rollDice()
    {
        if(!Dash)
        {
        setDice(oldDice => oldDice.map(die => {
            return die.isheld ? die : data()
        })
        )
    }
    else{
        setDash(false)
        setDice(allnewDice)
    }
    }
    function holdDice(id)
    {
        setDice(oldDice => oldDice.map(die => {

            return die.id===id ? {...die,isheld:!die.isheld} :die

        }))
    }

    const diceElements = () =>
        dice.map((die)=>{
          return <Die key={die.id} number={die.number} isheld={die.isheld} holdDice={()=>holdDice(die.id)}/>
        }
    )
   
   return(
<main>
    {Dash && <Confetti/>}
    <div className="dice-container">

    {diceElements()}

    </div>
    <Footer rollDice={rollDice} value={Dash ? "New Game" : "Roll"}/>
</main>
   )
}