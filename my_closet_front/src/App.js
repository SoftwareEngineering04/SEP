import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import Login from './pages/Login';
import Join from './pages/Join';
import FindID from './pages/FindID';
import FindPW from './pages/FindPW';
import Main from './pages/Main';
import MyInfo from './pages/MyInfo';
import ChangeInfo from './pages/ChangeInfo';
import AddColth from './pages/AddCloth';
import ClothList from './pages/ClothList';
import Search from './pages/Search';
import Favorite from './pages/Favorite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/search' element={<Search />} />
        <Route path='/clothlist' element={<ClothList />} />
        <Route path='/addcloth' element={<AddColth />} />
        <Route path='/changeinfo' element={<ChangeInfo />} />
        <Route path='/myinfo' element={<MyInfo />} />
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