import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PieChart from './PieChart';
import './components.css'

function Model() {
    const [reportresult, setreportresult] = useState([]);
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/');
    };
    
    function callmodel() {
        fetch('http://localhost:5000/summarize')
        .then(response => response.json())
        .then(data => setreportresult(data))
        .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(()=>callmodel(), [])

  return (
    <>
      <div className='topbar'>
        <button id="menult" style={{ fontSize: '24px', padding: '10px' }} onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
        <h3>Best Cat Food Finder</h3>
        <img id='top-cat' src='cat-clear.png'></img>
      </div>
      <main>
        <div className='main-menu'>
            {!reportresult?
            <h2>Loading... please wait</h2>:
            <div className='report-area'>
              <div className='summary-text'>
                <div className='summarytext-area'>
                  <h2> 👥 Summary of Customer Review 👥</h2>
                  <p>{reportresult[0]}</p>
                </div>
              </div>
              <div className='graph'>
                  {reportresult[1] ? (
                      <PieChart keywords={reportresult[1]} />
                  ) : (
                      <p>No emotion data available</p>
                  )}
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