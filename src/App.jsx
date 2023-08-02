import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../src/pages/Login';
import Cadastro from './pages/Cadastro';
import Inicio from './pages/Inicio';
import Perguntas from './pages/Perguntas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/inicio" element={<Inicio/>}></Route>
        <Route path="/perguntas" element={<Perguntas/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
