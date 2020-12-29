import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  // your code here
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    document.title = `You have ${likes} likes`
  })


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
     
        <p>My post</p>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
   
        
      </div>
    </div>
  )
}

