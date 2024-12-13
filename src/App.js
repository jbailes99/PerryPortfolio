import logo from './logo.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Work' element={<Work />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
