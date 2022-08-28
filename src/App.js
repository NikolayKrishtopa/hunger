import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Team from './components/Team'
import Booking from './components/Booking'
import Menu from './components/Menu'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mode, setMode] = useState('home')

  function onChangeMode(mode) {
    setMode(mode)
  }
  return (
    <>
      <div className="App">
        {mode === 'home' ? (
          <Home onChangeMode={onChangeMode} />
        ) : mode === 'about' ? (
          <About onChangeMode={onChangeMode} />
        ) : mode === 'team' ? (
          <Team onChangeMode={onChangeMode} />
        ) : mode === 'booking' ? (
          <Booking onChangeMode={onChangeMode} />
        ) : mode === 'menu' ? (
          <Menu onChangeMode={onChangeMode} />
        ) : mode === 'events' ? (
          <Events onChangeMode={onChangeMode} />
        ) : mode === 'contact' ? (
          <Contact onChangeMode={onChangeMode} />
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
