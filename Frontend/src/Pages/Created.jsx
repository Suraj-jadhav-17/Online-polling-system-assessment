import React from 'react'
import { useNavigate } from 'react-router-dom';

const Created = () => {
    const navigate = useNavigate();
  return (
    <div className='created'>
        <h1>Poll Created Successfully!</h1>
        <button onClick={() => navigate('/polls')}>View Polls</button>
    </div>
  )
}

export default Created