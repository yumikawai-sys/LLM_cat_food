import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './components.css'
import Histories from './Histories'
function History() {
  const [histories, setHistories] = useState([]);

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  
  function getHistories() {
    const result = [{id: 1234, content: 'this is test of history1'}, {id: 2345, content: 'this is test of history2'}];
    setHistories(result)
  }

  useEffect(()=> getHistories, [])

  return (
    <>
      {histories? 
      <Histories histories={histories}/>:
      <div>There is no history yet</div>}
      <button onClick={navigateToHome}>Exit</button>
    </>
  )
}

export default History