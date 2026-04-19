import React, { useEffect } from 'react'
import api from '../api/api';
import './Polls.css';
import { useNavigate } from 'react-router-dom';
import PollDetailes from './PollDetailes';
const Polls = () => {
    const navigate = useNavigate();

    const [polls, setPolls] = React.useState([]);
    useEffect(() => {
        
        const fetchPolls = async () => {
          
            const response = await api.get('/poll/all');
            const data = await response.data.data;
            setPolls(data);
        };

        fetchPolls();
    }, []);

  return (
    <div className='polls'>
     
        <h1>Polls</h1>
        {polls.map(poll => (
            <div key={poll._pollId} className="poll">
               <div className="polls-detail">
                 <h2>{poll.title}</h2>  
                <p>description: {poll.description}</p> 
               </div>
              <button onClick={()=>navigate(`/poll-details/${poll.pollId}`)}>Vote</button>
            </div>
        ))}

    </div>
  )
}

export default Polls