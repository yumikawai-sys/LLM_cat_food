import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PieChart from './PieChart';
import './components.css'

function Model() {
    const [reportresult, setreportresult] = useState('');
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/');
    };
    
    function callmodel() {
        const result = 'temp result';
        const temp = [{percent: 20, emotion:'annoyed'},{percent: 30, emotion:'anger'},{percent: 50, emotion:'dissapointment'}]
        setreportresult(result);
        setKeywords(temp)
    }

    useEffect(()=>callmodel, [])

  return (
    <>
      <button id="menult" onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
      <main>
        <div className='main-menu'>
            {!reportresult?
            <h2>Loading... please wait</h2>:
            <div className='report-area'>
              <div className='summary-text'>{reportresult}</div>
              <div className='graph'>
                <PieChart keywords={keywords}/>
              </div>
            </div>    
            }
        </div>
      </main>
      <button id="exit" onClick={navigateToHome}>Exit</button>
    </>
  )
}

export default Model