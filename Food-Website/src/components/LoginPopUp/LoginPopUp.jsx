import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
// eslint-disable-next-line react/prop-types
const LoginPopUp = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className='login-popup-inputs'>
                    {
                        currentState === 'Login' ? <></> : <input type='text' placeholder='Your Name' required />
                    }
                    <input type='email' placeholder='Your Email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <button>{currentState === 'Sign Up' ? "Create Account" : 'Login'}</button>
            </form>
        </div>
    )
}

export default LoginPopUp
