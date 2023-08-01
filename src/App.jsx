import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../src/pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
