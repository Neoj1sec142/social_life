import './styles/App.css';
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Layout from './utils/Layout';
import AuthPage from './containers/AuthPage'
import Logout from './components/base/Logout';
import Err404 from './components/base/Err404';
import FeedPage from './containers/FeedPage';
import Sidebar from './components/base/Sidebar'
import OpenButton from './components/base/Openbutton'
import { useStateContext } from './utils/StateContext';
import PostDetail from './components/social/blog/PostDetail';

const App = ({isAuthenticated, current_user}) => {
  const {sidebarOpen} = useStateContext()

  return (
    <div className="App" >
      <Layout>
      {isAuthenticated ? (sidebarOpen ? <Sidebar /> : <OpenButton />) : null}
        <Routes>
          {/* Main Base Routes */}
          <Route path='/logout' element={<Logout />}/>
          {/* Admin Protected Routes */}
          
          {/* Protected Routes */}
          <Route path='/' element={isAuthenticated ? <FeedPage /> : <AuthPage />}/>
          <Route path='/feed' element={isAuthenticated ? <FeedPage /> : <AuthPage />} />
          <Route path='/view-post/:id/' element={isAuthenticated ? <PostDetail /> : <AuthPage />} />
          
          <Route path="*" element={<Err404 />} /> 
        </Routes>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {})(App);