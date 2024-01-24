import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <>
      <div className='signUpInputs signInInputs'>
      <h1 className='signUp-h signIn-h'>Login</h1>
        <div className='inputSignUp'>
          <input type='email' name='email' placeholder='Enter E-mail'/>
        </div>
        <div className='inputSignUp'>
          <input type='password' name='password' placeholder='Enter Password'/>
        </div>
        <div className='inputSignUp'>
          <button className='signUpBtn'>Login</button>
          <Link to={'/signUp'} className='signInLink'>Create an Account</Link>
        </div>
      </div>
      
    </>
      
    </div>
  )
}

export default Login
