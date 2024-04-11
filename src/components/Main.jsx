import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Main() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };

    const navigateToModel = () => {
        navigate('/model');
      };

    const navigateToUpload = () => {
        navigate('/upload');
      };

  return (
    <>
      <button id="menult" onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
      <main>
        <h2>Did you upload customer review?</h2>
        <div className='main-menu'>
            <button id="buttons" onClick={navigateToModel}>Yes</button>
            <button id="buttons" onClick={navigateToUpload}>No</button>
        </div>
      </main>
    </>
  )
}

export default Main