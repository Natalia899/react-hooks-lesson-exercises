import React, { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  // your code here
  const [month, setMonth] = useState(0)

  const [expenses, setExpenses] = useState([])

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const handleChange = (event) => {
    let index = months.indexOf(event.target.value)
    return setMonth(index)
  }

  useEffect(() => {
    const fetchData = async () => {
      let e = await fetchExpenses(month)
      console.log(e)
      setExpenses(e)
    }
    fetchData()
  }, [month])

  // useEffect(() => {
  //   (async () => {
  //     const e = await fetchExpenses(month)
  //     setExpenses(e)
  //   })()
  // }, [month])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="month" onClick={handleChange}>
          <option value='selectCategory'>Select Category</option>
          {months.map(m => {
            return <option onClick={handleChange} value={m}>{m}</option>
          })}
        </select>
       <div>
         {expenses.map(exp=>{ return (
           <div>
             <p>date: {exp.date}</p>
             <p>group: {exp.group}</p>
             <p>amount: {exp.amount}</p>

           </div>
         )
         })}
       </div>
      </div>
    </div>
  )
}