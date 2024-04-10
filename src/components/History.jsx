import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
      <button id="menult" onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
      <main>
        {histories? 
        <Histories histories={histories}/>:
        <div>There is no history yet</div>}
      </main>
      <button id="exit" onClick={navigateToHome}>Exit</button>
    </>
  )
}

export default History