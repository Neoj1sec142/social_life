import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './utils/Layout';
import AuthPage from './containers/AuthPage'
import Dashboard from './containers/Dashboard';
import './styles/App.css';

const App = ({isAuthenticated}) => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {/* Main Base Routes */}
          <Route path='/' element={isAuthenticated ? <Dashboard /> : <AuthPage />}/>
          <Route path='/dash' element={<Dashboard />}/>
          {/* <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/logout' element={ <Logout /> } /> */}
          {/* User Routes */}
          
          
          
        </Routes>
        
      </Layout>
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(App);
