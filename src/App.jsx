// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Topmenu from './components/Topmenu'
import Main from './components/Main'
import History from './components/History'

function App() {
  // const [showBottom, setshowBottom] = useState(false)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Topmenu />} />
        <Route
          path="/getReport"
          element={
            <Main />
          }
        />
        <Route
          path="/history"
          element={
            <History />
          }
        />       
      </Routes>
    </Router>
    </>
  )
}

export default App
