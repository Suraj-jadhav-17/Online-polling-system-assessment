import React from 'react'
import { useNavigate } from 'react-router-dom'

const Voted = () => {
    const navigate = useNavigate();
  return (
    <div className='voted'>
        <h1>Vote Confirmation</h1>
      <p>Thank you for voting!</p>
      <p>Your vote has been recorded.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default Voted