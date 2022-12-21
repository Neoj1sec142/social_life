import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './utils/Layout';
import AuthPage from './containers/AuthPage'
// import Dashboard from './containers/Dashboard';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
       
        <Routes>
          {/* Main Base Routes */}
          <Route path='/' element={<AuthPage />}/>
          {/* <Route path='/main' element={<Dashboard />}/> */}
          {/* <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/logout' element={ <Logout /> } /> */}
          {/* User Routes */}
          
          
          
        </Routes>
        
      </Layout>
    </div>
  );
}

export default App;
