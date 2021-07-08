import React,{useState} from 'react'
import {login} from '../actions'
import {useDispatch} from "react-redux"
const Login = () => {
 const dispatch=useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 const loginFunc=()=>{
  dispatch(login({email,password}))
 }
 return (
  <div>
   <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
   <input type="text" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
   <button onClick={loginFunc}>login</button>
  </div>
 )
}

export default Login

