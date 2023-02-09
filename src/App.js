import React from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allNewDies())

  function allNewDies() {
    const newDice = []
    for(let i = 0; i < 10; i++) {
      newDice.push({
        value:Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDies())
  }
  
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  function holdDice(id) {
    console.log(id)
  }

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div> 
      <button className="roll-dice" onClick={rollDice}>Roll</button>   
    </main>
  );
}

export default App;
