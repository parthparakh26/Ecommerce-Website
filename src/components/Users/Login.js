import React from 'react'
import Navbar from '../Navbar'
import '../../CSS/login.css'

const Login = () => {
  return (
    <>
        <div><Navbar/></div>
        <div className='login--segment'>
            <div className='login--component'>
               <div><h3 className='logo--login'>WIRE CART</h3></div>
               <div className='login--email-address'>
                <input placeholder='Email-address' className='e-mail'></input>
               </div>
               <div className='login--password'>
                <input placeholder='password' className='pwd'></input>
               </div>
               <div className='login--sign-up'>
                <button className='login--button'>Log in</button>
               </div>
            </div>
        </div>
    </>
  )
}

export default Login