import React from 'react'
import {connect} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Layout from './utils/Layout';
import AuthPage from './containers/AuthPage'
import Dashboard from './containers/Dashboard';
import Logout from './components/base/Logout';
import FeedPage from './containers/FeedPage';
import PostDetail from './containers/details/PostDetail';
import ProfilePage from './components/profile/ProfilePage';
import InboxPage from './containers/InboxPage';
import './styles/App.css';
import ThreadForm from './components/forms/ThreadForm';
import Dialog from './containers/Dialog';
import Card405 from './components/cards/405Card';
// import ProfileForm from './components/forms/ProfileForm';

const App = ({isAuthenticated}) => {
  
  return (
    <div className="App">
      <Layout>
        <Routes>
          {/* Main Base Routes */}
          <Route path='/' element={isAuthenticated ? <FeedPage /> : <AuthPage />}/>
          <Route path='/logout' element={<Logout />}/>
          {/* Protected Routes */}
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <AuthPage />} />
          <Route path='/feed' element={isAuthenticated ? <FeedPage /> : <AuthPage />}/> 
          <Route path='/profile/:id' element={isAuthenticated ? <ProfilePage /> : <AuthPage />}/> 
          <Route path='/inbox' element={isAuthenticated ? <InboxPage /> : <AuthPage />}/> 
          <Route path='/new-thread/:id' element={isAuthenticated ? <ThreadForm /> : <AuthPage />}/> 
          <Route path='/thread/:id' element={isAuthenticated ? <Dialog /> : <AuthPage />}/> 
          <Route path='/post/:id' element={isAuthenticated ? <PostDetail /> : <AuthPage />}/> 
          <Route path="*" element={<Card405 />} />
        </Routes>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(App);
