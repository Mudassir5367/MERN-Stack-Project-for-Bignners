import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    };

    const loginData = async (e) => {
        e.preventDefault();

        const { email, password } = loginUser;
        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (res.status === 200) {
            console.log('Signin successful');
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            window.alert('Invalid Credentials');
        }
    };

  return (
    <div>
       <>
      <div className='signUpInputs signInInputs'>
      <h1 className='signUp-h signIn-h'>Login</h1>
      <form method='POST'>
      <div className='inputSignUp'>
          <input type='email' name='email' placeholder='Enter E-mail'
            value={loginUser.email}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <input type='password' name='password' placeholder='Enter Password'
            value={loginUser.password}
            onChange={handleChange}
          />
        </div>
        <div className='inputSignUp'>
          <button className='signUpBtn' onClick={loginData}>Login</button>
          <Link to={'/signUp'} className='signInLink'>Create an Account</Link>
        </div>
      </form>
      </div>
      
    </>
      
    </div>
  )
}

export default Login
