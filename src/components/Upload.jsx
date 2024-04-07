import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Upload() {

    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/');
    };
    const navigateToModel = () => {
      navigate('/model');
    };

  return (
    <>
      <button id="menult" onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
      <main>
        <div className='main-menu'>
            <h2>Please upload customer review.</h2>
            <button onClick={navigateToModel}>Done</button>
            <button onClick={navigateToHome}>Exit</button>
        </div>
      </main>
    </>
  )
}

export default Upload