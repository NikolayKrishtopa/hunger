import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Team from './components/Team'
import Booking from './components/Booking'
import Menu from './components/Menu'
import Events from './components/Events'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

function App() {
  const [mode, setMode] = useState('home')

  function onChangeMode(mode) {
    setMode(mode)
  }
  return (
    <div className="page">
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
      ) : mode === 'gallery' ? (
        <Gallery onChangeMode={onChangeMode} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default App
