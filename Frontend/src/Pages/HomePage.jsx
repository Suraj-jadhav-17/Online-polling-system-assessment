import axios from 'axios'
import React from 'react'
import api from '../api/api'
import { redirect, useNavigate } from 'react-router-dom'
import './HomePage.css';
const HomePage = () => {
const navigate = useNavigate();
  return (
    <div className='homePage'>

         <h1>Welcome to the Online Polling System</h1>
         <div className="poll-options">
            <button className='poll-option' onClick={() => navigate("/create-poll")} >Create Poll</button>
            <button className='poll-option' onClick={()=> navigate("/polls")}>View Polls</button>
         </div>
    </div>
  )
}

export default HomePage