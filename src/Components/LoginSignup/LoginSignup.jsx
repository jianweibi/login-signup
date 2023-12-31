import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export default function LoginSignup() {
    const [action, setAction] = useState("Sign up");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === "Log in" ? <div></div> : <div className='input'><img src={user_icon} alt="" />
            <input type="text" placeholder='username'/></div>}
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='email'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='password'/>
            </div>
        </div>
        <div className='forgot-password'>Forgot Password? <span>Click Here</span></div>
        <div className='submit-container'>
            <div className={action === 'Sign up' ? 'submit' : 'submit grey'} onClick={() => setAction('Sign up')}>Sign up</div>
            <div className={action === 'Log in' ? 'submit' : 'submit grey'} onClick={() => setAction('Log in')}>Log in</div>
        </div>

    </div>
  )
}
