import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../src/pages/Login"
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
