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
    const result = [{id: 1234, content: 'This is test of history1'}, {id: 2345, content: 'This is test of history2'}];
    setHistories(result)
  }

  useEffect(()=> getHistories(), [])

  return (
    <>
      <div className='topbar'>
        <button id="menult" style={{ fontSize: '24px', padding: '10px' }} onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
        <h3>Best Cat Food Finder</h3>
        <img id='top-cat' src='cat-clear.png'></img>
      </div>
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