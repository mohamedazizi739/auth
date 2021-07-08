import React,{useState} from 'react'
import {register} from '../actions'
import {useDispatch} from "react-redux"
const Register = () => {
  const dispatch=useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const registerFunc=()=>{
   console.log('rrr')
   dispatch(register({name,email,password}))
  }
 return (
  <div>
   <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} />
   <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
   <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
   <button onClick={registerFunc}>register</button>
  </div>
 )
}

export default Register
