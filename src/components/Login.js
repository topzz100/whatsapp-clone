import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from '../firebase'
import {useStateValue} from './AppProvider'
import { actionTypes } from './Reducer'

const Login = () => {
  const[{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result =>{
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      });
    })
    .catch(error => alert(error.message)) 
  }
  return(
    <div className = "login">
      <div className = "login-container">
        <img src = "https://1.bp.blogspot.com/-MtxfH-ywp50/XxWTPtleoyI/AAAAAAAAMOQ/Sqhvarh2yH8KJ2NJoLMH3Za9l5U_vZNRACLcBGAsYHQ/s640/1.JPG" alt=""/>
        <div className = "login-text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick = {signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}
export default Login