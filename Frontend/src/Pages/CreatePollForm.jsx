import axios from 'axios';
import React from 'react'
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import './CreatePollForm.css';
const CreatePollForm = () => {
    const [poll, setPoll] = React.useState({
        title: '',
        description: '',
        options: ['', '']
    });
  
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post('/poll/create', poll);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
   const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === "option1" || name === "option2") {
    const index = name === "option1" ? 0 : 1;

    setPoll(prev => {
      const newOptions = [...prev.options];
      newOptions[index] = value;

      return {
        ...prev,
        options: newOptions
      };
    });
  } else {
    setPoll(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

    const navigate = useNavigate();
    return (
        <div className='Poll-form'>
           <div className="title">
            <h1>Create Poll</h1>
           </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={poll.title} onChange={handleInputChange} />
                    <label>Description</label>
                    <textarea name="description" value={poll.description} onChange={handleInputChange}></textarea>

                    <label>Option1</label>
                    <input type="text" name="option1" value={poll.options[0]} onChange={handleInputChange} />
                    <label>Option2</label>
                    <input type="text" name="option2" value={poll.options[1]} onChange={handleInputChange} />
               

                    <button type="submit" onClick={()=>navigate('/created')}>Create Poll</button>
                </div>
            </form>

    </div>
  )
}

export default CreatePollForm