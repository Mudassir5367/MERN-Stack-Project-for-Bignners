import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='signUpInputs'>
      <h1 className='signUp-h signIn-h'>SignUp</h1>
        <div className='inputSignUp'>
          <input type='text' name='name' placeholder='Enter Name'/>
        </div>
        <div className='inputSignUp'>
          <input type='email' name='email' placeholder='Enter E-mail'/>
        </div>
        <div className='inputSignUp'>
          <input type='tel' name='phone' placeholder='Enter Phone'/>
        </div>
        <div className='inputSignUp'>
          <input type='text' name='work' placeholder='Enter Work'/>
        </div>
        <div className='inputSignUp'>
          <input type='password' name='password' placeholder='Enter Password'/>
        </div>
        <div className='inputSignUp'>
          <input type='password' name='cpassword' placeholder='Enter Confirm Password'/>
        </div>
        <div className='inputSignUp'>
          <button className='signUpBtn'>Register</button>
          <Link to={'/login'} className='signUpLink'>I've already an Account</Link>
        </div>
      </div>
      
    </>
  )
}

export default Signup
