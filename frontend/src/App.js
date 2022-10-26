import Layout from './utils/Layout';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import Notfound from './components/notfound'

const App = () => {
  return (
    <div className='app'>
      <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Routes>
      </Layout> 
    </div>
  );
}

export default App;
