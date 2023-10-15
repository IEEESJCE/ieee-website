import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Board from './pages/Board';
import Album from './pages/Album';
import Team from './pages/Team';
import Societies from './pages/Societies';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
        <Route path="/board" element={<Board />} />
        <Route path="/album" element={<Album />} />
        <Route path="/team" element={<Team />} />
        <Route path="/societies" element={<Societies/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
