const initialState={loading:false,isAuth:false,error:""}

const userReducer=(state=initialState,{type,payload})=>{

 switch (type) {
  case "registerProcess":
    case "loginProcess":
    case "authProcess":
  return({...state,loading:true})
  case "registerSucceed":
  return({...state,loading:false})
  case "loginSucceed":
  case "authSucceed":
    return({...state,loading:false,isAuth:true})
  case "registerFailed":
  case "loginFailed":
  case "authFailed":
  return({...state,loading:false,error:payload})
  default:

   return(state)
 }
}

export default userReducer