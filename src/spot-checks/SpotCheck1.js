
import React, { useState } from 'react'

export default function SpotCheck1() {
  // your code here
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => setCounter(counter - 1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
      <p>{counter}</p>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>

      </div>
    </div>
  )
}