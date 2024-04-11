import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Topmenu from './components/Topmenu'
import Chat from './components/Chat'
import Main from './components/Main'
import History from './components/History'
import Model from './components/Model'
import Upload from './components/Upload'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Topmenu />} />
        <Route path="/gotoChat" element={<Chat />} />
        <Route path="/getReport" element={<Main />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/model" element={<Model />}/>
        <Route path="/upload" element={<Upload />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
