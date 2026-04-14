import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router basename="/MouraPortfolio/">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sobre" element={<About />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
