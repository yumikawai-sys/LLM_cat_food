import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Chat() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };

      const [chat, setChat] = useState('');
          
      function getChatResponse(e) {
        const selectedQuestion = e.target.value; 
        fetch(`http://localhost:5000/chat?question=${encodeURIComponent(selectedQuestion)}`)
        .then(response => response.json())
        .then(data => setChat(data))
        .catch(error => console.error('Error fetching data:', error));
    }

  return (
    <>
      <div className='topbar'>
        <button id="menult" style={{ fontSize: '24px', padding: '10px' }} onClick={navigateToHome}><div className="menuName"><FontAwesomeIcon icon={faHome} /></div></button>
        <h3>Best Cat Food Finder</h3>
        <img id='top-cat' src='cat-clear.png'></img>
      </div>
      <main>
        <h2>Have questions ? Choose one from the menu below.</h2>
        <select id="question-select" onChange={getChatResponse}>
            <option value="What is the best cat food?">What is the best cat food?</option>
            <option value="What is the best cat food for senior cats?">What is the best cat food for senior cats?</option>
            <option value="What should I avoid in cat food?">What should I avoid in cat food?</option>
            <option value="How can I transition my cat to a new food?">How can I transition my cat to a new food?</option>
            <option value="What are the benefits of grain-free cat food?">What are the benefits of grain-free cat food?</option>
            <option value="Is wet or dry food better for cats?">Is wet or dry food better for cats?</option>
            <option value="What are some reputable cat food brands?">What are some reputable cat food brands?</option>
            <option value="What are the key differences between kitten and adult cat food?">What are the key differences between kitten and adult cat food?</option>
            <option value="Are there specific dietary requirements for diabetic cats?">Are there specific dietary requirements for diabetic cats?</option>
            <option value="How can I tell if my cat has a food allergy?">How can I tell if my cat has a food allergy?</option>
        </select>
        
        {!chat?
        <div className='chat-main'>
            <h5>Let&apos;s find out...</h5>
        </div>:
        <div className='chat-main'>
            <p className="animate__animated animate__slideInUp"> 🐈: {chat}</p>
        </div>            
        }
      </main>
    </>
  )
}

export default Chat