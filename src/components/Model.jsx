import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Model() {
    const [reportresult, setreportresult] = useState('');
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/');
    };
    
    function callmodel() {
        const result = 'temp result';
        setreportresult(result);
    }

    useEffect(()=>callmodel, [])

  return (
    <>
      <button id="menult" onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
      <main>
        <div className='main-menu'>
            {!reportresult?
            <h2>Loading... please wait</h2>:
            <div className='report-area'>{reportresult}</div>    
            }
        </div>
      </main>
      <button onClick={navigateToHome}>Exit</button>
    </>
  )
}

export default Model