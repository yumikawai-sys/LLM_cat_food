import { useState, useEffect } from 'react'
import './components.css'
import Histories from './Histories'
function History() {
  const [histories, setHistories] = useState('');

  function Gohome() {
    // back to top page

  }
  
  function getHistories() {
    const result = 'this is test of history';
    setHistories(result)
  }

  useEffect(()=> getHistories, [])

  return (
    <>
      {histories? 
      <Histories />:
      <div>There is no history yet</div>}
      <button onClick={Gohome}>Exit</button>
    </>
  )
}

export default History