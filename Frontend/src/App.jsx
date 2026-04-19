import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePollForm from './Pages/CreatePollForm'
import Created from './Pages/Created'
import Polls from './Pages/Polls'
import PollDetailes from './Pages/PollDetailes'
import Voted from './Pages/Voted'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-poll' element={<CreatePollForm />} />
        <Route path='/polls' element={<Polls />} />
        <Route path='/poll-details/:pollId' element={<PollDetailes />} />
        <Route path='/created' element={<Created />} />
        <Route path='/voted' element={<Voted />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
