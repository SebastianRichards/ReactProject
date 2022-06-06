import React from 'react'
import { useState } from 'react';

const SignUp = ({backBtn, signUp}) => {
    const [details, setDetails] = useState({username: "", password: "", confirmPassword: ""});

    const submitHandler = e => {
        e.preventDefault();
        signUp(details);
    }

    return (
        <form className='signUpForm'>
            <div className='signUpFormUser form-group'>
                <label>Username</label>
                <input className='form-control' type='text' placeholder='Enter Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
            </div>
            <div className='signUpPass form-group'>
                <label>Password</label>
                <input className='form-control' type='password' placeholder='Enter Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
            <div className='signUpConfirm form-group'>
                <label>Confirm Password</label>
                <input className='form-control' type='password' placeholder='Confirm Password' onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword}></input>
            </div>
            <div className='buttonContainerTwo'>
                <button onClick={backBtn} type="button" className="button-75 buttonsSign1" role="button" to="/signIn"><span class="text">Back</span></button>
                <button onClick={submitHandler} type="submit" className="button-75 buttonsSign2" role="button" to="/signIn"><span class="text">Enter</span></button>
            </div>
        

            
        </form>

        
    )
}

export default SignUp
