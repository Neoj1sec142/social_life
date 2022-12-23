import React from 'react'
import {connect} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Layout from './utils/Layout';
import AuthPage from './containers/AuthPage'
import Dashboard from './containers/Dashboard';
import Logout from './components/base/Logout';
import FeedPage from './containers/FeedPage';
import PostDetail from './containers/details/PostDetail';
import './styles/App.css';
import ProfileForm from './components/forms/ProfileForm';

const App = ({isAuthenticated}) => {
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          {/* Main Base Routes */}
          <Route path='/' element={<AuthPage />}/>
          <Route path='/logout' element={<Logout />}/>
          {/* Protected Routes */}
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <AuthPage />} />
          <Route path='/feed' element={isAuthenticated ? <FeedPage /> : <AuthPage />}/> 
          <Route path='/update-profile' element={isAuthenticated ? <ProfileForm /> : <AuthPage />}/> 
          <Route path='/post/:id' element={isAuthenticated ? <PostDetail /> : <AuthPage />}/> 
        </Routes>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(App);
