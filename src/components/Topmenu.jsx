import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Topmenu() {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/');
    };
    const navigateToReport = () => {
      navigate('/getReport');
    };

    const navigateToHistory = () => {
        navigate('/history');
    };

  return (
    <>
      <button id="menult" onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
      <main>
        <h2>Welcome to Business Report!</h2>
        <div className='main-menu'>
            <button onClick={navigateToReport}>New Report</button>
            <button onClick={navigateToHistory}>View Existing Reports</button>
        </div>
      </main>
    </>
  )
}

export default Topmenu