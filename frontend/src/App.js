import './App.css';
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

import Navbar from './components/Navbar';

import EditPost from './pages/EditPost';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Login from './pages/Login';
import NewGoalForm from './pages/NewGoalForm';
import Profile from './pages/Profile'
import Signup from './pages/Signup'


const App = () => {

    const getToken = () => {
      return localStorage.getItem("authToken")
    }
  
    const LoggedIn = () => {
      return getToken() ? <Outlet /> : <Navigate to="/" />;
    };
  
    const NotLoggedIn = () => {
      return !getToken() ? <Outlet /> : <Navigate to="/" />;
    };


    return (
      <div >

        <Navbar />

          <Routes>

            <Route path='/' element={<Home />} />
            
            <Route element={<LoggedIn />}>

              <Route path='/post/:id' element={<EditPost />} />
              <Route path='/edit-profile/:id' element={<EditProfile />} />
              <Route path='/new-goal-form' element={<NewGoalForm />} />
              <Route path='/profile/:id' element={<Profile />} />
            
            </Route> 

             <Route element={<NotLoggedIn />}> 

              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />

            </Route>
            
          </Routes>

      </div>
    )
  
}

export default App;
