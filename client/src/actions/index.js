import axios from "axios"

export const register=({name,email,password})=>async(dispatch)=>{
   
   try {
    dispatch({type:"registerProcess"})
    console.log("ttttttt")
    const res=await axios.post('http://localhost:5000/api/user/register',{name,email,password})
    dispatch({type:"registerSucceed"})

   } catch (error) {
    dispatch({type:"registerFailed",payload:error.response.data.msg})
   }
}

export const login=({email,password})=>async(dispatch)=>{
   
   try {
    dispatch({type:"loginProcess"})
    const res=await axios.post('http://localhost:5000/api/user/login',{email,password})
    await localStorage.setItem('token', res.data.token)
    dispatch({type:"loginSucceed"})

   } catch (error) {
    dispatch({type:"loginFailed",payload:error.response.data.msg})
   }
}

export const auth=()=>async(dispatch)=>{
   
   try {
    dispatch({type:"authProcess"})
    
    const token=await localStorage.getItem("token")
    const res=await axios.get('http://localhost:5000/api/user/auth',{
  headers: {
    'authorization': token
  }})
    
    dispatch({type:"authSucceed"})

   } catch (error) {
    console.log(error.response)
    dispatch({type:"authFailed"})
   }
}
