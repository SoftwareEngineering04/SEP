import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<BeforeLogin />} />
      </Routes>
    </Router>
  )}


export default App;