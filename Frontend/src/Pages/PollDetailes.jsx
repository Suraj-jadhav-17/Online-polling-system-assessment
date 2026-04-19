import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import './PollDetails.css';
const PollDetailes = () => {
    const { pollId } = useParams();
    const [poll, setPoll] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPollDetails = async () => {
            try {
                const response = await api.get(`/poll/find/${pollId}`);
                setPoll(response.data.data);
            } catch (error) {
                console.error("Error fetching poll details:", error);
            }
        };

        fetchPollDetails();
    }, [pollId]);
    console.log(pollId);
    console.log(poll);
  return (
    <div>
      {poll ? (
        <div className="poll-details">
          <h2>{poll.title}</h2>
          <p>{poll.description}</p>
          <div className="options">
            <input type="radio" id="option1" name="pollOptions" value={poll.options[0]} />
            <label htmlFor="option1">{poll.options[0]}</label><br />
            <input type="radio" id="option2" name="pollOptions" value={poll.options[1]} />
            <label htmlFor="option2">{poll.options[1]}</label><br />
          </div>
            <button className="vote-button" onClick={() => navigate('/voted')}>Vote</button>
        </div>
      ) : (
        <p>Poll not found</p>
      )}
    </div>
  )
}

export default PollDetailes