import React from 'react'
import { useState } from 'react';

const SignIn = ({backBtn, Login}) => {
    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        
        
    }
  return (
    <form className='signInForm'>
        <div className='signInUser form-group'>
            <label>Username</label>
            <input className='form-control' type='text' placeholder='Enter Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.name}></input>
        </div>
        <div className='signInPass form-group'>
            <label>Password</label>
            <input className='form-control' type='password' placeholder='Enter Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
        </div>
        

        <div className='buttonContainerTwo'>
            <button onClick={backBtn} type="button" className="button-75 buttonsSign1" role="button" to="/signIn"><span class="text">Back</span></button>
            <button onClick={submitHandler} type="submit" className="button-75 buttonsSign2" role="button" to="/signIn"><span class="text">Enter</span></button>
        </div>

        


        
      
    </form>
  )
}

export default SignIn
