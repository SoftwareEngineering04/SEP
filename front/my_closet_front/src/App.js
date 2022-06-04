import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import Login from './pages/Login';
import Join from './pages/Join';
import FindID from './pages/FindID';
import FindPW from './pages/FindPW';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/findpw' element={<FindPW />} />
        <Route path='/findid' element={<FindID />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<BeforeLogin />} />
      </Routes>
    </Router>
  );}


export default App;