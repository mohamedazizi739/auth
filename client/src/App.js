import React,{useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import {auth} from './actions'
import Profile from './components/Profile'
function App() {
  const error = useSelector(state => state.userReducer.error)
  const isAuth = useSelector(state => state.userReducer.isAuth)

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(auth())
  }, [])
  return (
    <BrowserRouter>
    <Route exact path="/">
      {isAuth===true?<Redirect to="/profile"/>:
      <div>
      <Register/>
      <Login/>
      {error? <p style={{color:"red"}}>{error}</p>:null }
      
    </div>}
    </Route>
    <Route exact path="/profile">
      {isAuth===true?<Profile/>:<Redirect to="/"/>}
    </Route>
    </BrowserRouter>
  );
}

export default App;
