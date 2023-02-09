import React from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(allNewDies())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("WIN!")
    }

  }, [dice])

  function generateNewDie() {
    return {
      value:Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDies() {
    const newDice = []
    for(let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }
  
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click exh die to freeze it at its current value between rolls</p>
      <div className='dice-container'>
        {diceElements}
      </div> 
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>   
    </main>
  );
}

export default App;
