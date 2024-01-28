import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  const [user, setUser] = useState({
    name:'', email:'', phone:'', work:'', password:'', cpassword:''
  })

  const handleChange = (e) =>{
    // console.log(e);
    const name = e.target.name;
    const val = e.target.value;
    console.log(name,val);
    setUser({...user, [name]:val})
  }

 

  return (
    <>
      <div className='signUpInputs'>
      <h1 className='signUp-h signIn-h'>SignUp</h1>
        <div className='inputSignUp'>
          <input type='text' name='name' placeholder='Enter Name'
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <input type='email' name='email' placeholder='Enter E-mail'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <input type='tel' name='phone' placeholder='Enter Phone'
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <input type='text' name='work' placeholder='Enter Work'
            value={user.work}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <input type='password' name='password' placeholder='Enter Password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <input type='password' name='cpassword' placeholder='Enter Confirm Password'
            value={user.cpassword}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <button className='signUpBtn' >Register</button>
          <Link to={'/login'} className='signUpLink'>I've already an Account</Link>
        </div>
      </div>
      
    </>
  )
}

export default Signup
