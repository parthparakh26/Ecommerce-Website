import {React,useState} from 'react'
import Navbar from '../Navbar'
import '../../CSS/register.css'
import GoogleButton from 'react-google-button'

const Register = () => {
  
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [pwd,setPwd] = useState('')

  async function onSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        pwd
      }),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    const data = await response.json()

    console.log(data);
 }

 

  return (
    <>
        <Navbar />
        <div className='Register--segment'>
            <h1 className='Register--quote'>"THE BEST <span className='shopping--experience'>SHOPPING EXPERIENCE</span> AT THE COMFORT OF YOUR HOUSE"</h1>
            <form className='Register--component' onSubmit={onSubmit}>
               <div className='first--name-last--name'>
                <input type="text" placeholder='First Name' className='f-name'value={fname} onChange={(e) => setFname(e.target.value)}></input>
                <input type="text" placeholder='Last Name' className='l-name'value={lname} onChange={(e) => setLname(e.target.value)}></input>
               </div>
               <div className='register--email-address'>
                <input type="email" placeholder='Email-address' className='e-mail'value={email} onChange={(e) => setEmail(e.target.value)}></input>
               </div>
               <div className='register--password'>
                <input type="password" placeholder='password' className='pwd'value={pwd} onChange={(e) => setPwd(e.target.value)}></input>
               </div>
               <div className='register--sign-up'>
                <button type="submit" value="register" className='register--button'>Sign up</button>
               </div>
               <div className='or--sign-up--with'>
                 <p>or sign up with:</p>
               </div>
               <div className='social--credentials'>
               <GoogleButton/>
               </div>
            </form>
        </div>
    </>
  )
}

export default Register