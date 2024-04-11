import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Topmenu() {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/');
    };

    const navigateToChat = () => {
      navigate('/gotoChat');
    };

    const navigateToReport = () => {
      navigate('/getReport');
    };

    const navigateToHistory = () => {
        navigate('/history');
    };

  return (
    <>
      <div className='topbar'>
        <button id="menult" style={{ fontSize: '24px', padding: '10px' }} onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
        <h3>Best Cat Food Finder</h3>
        <img id='top-cat' src='cat-clear.png'></img>
      </div>
      
      <main>
        <h2>Let&apos;s find the best cat food !</h2>
        <div className='main-menu'>
            <button id="buttons" onClick={navigateToChat}>Ask Questions</button>
            <button id="buttons" onClick={navigateToReport}>Summarize Reviews</button>
            <button id="buttons" onClick={navigateToHistory}>View Existing Reviews</button>
        </div>
      </main>
    </>
  )
}

export default Topmenu