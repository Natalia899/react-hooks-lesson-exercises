import React, { useState, useEffect } from 'react'

export default function Exercise1() {
  // your code here
  const [user, setUser] = useState({ name: '', city: '', country: ''  })
 const handleChange = (event)=> setUser({...user, [event.target.name]: event.target.value})
  const countries = ['united states', 'china', 'united kingdom', 'australia']
  
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input name='name' onChange={handleChange}  value={user.name} placeholder='name'/>
        <input name='city' onChange={handleChange}  value={user.city} placeholder='city'/>
        <select name="country"  onChange={handleChange} value={user.country}>
                    <option value='selectCategory'>Select Category</option>
                    {countries.map(c => {
                        return <option value={c.country} onChange={handleChange} >{c}</option>
                    })}
                </select>

      </div>
    </div>
  )
}