import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({showSignInBtn, showSignUpBtn, guestLogin}) => {
    return (
        <div className='buttonContainer'>
            <button onClick={showSignInBtn} className="button-75 introItem1" role="button" to="/signIn"><span class="text">Sign In</span></button>
            <button onClick={showSignUpBtn} className="button-75 introItem2" role="button" to="/signUp"><span class="text">Sign Up</span></button>
            <a className="introItem3" onClick={guestLogin}>Log in as Guest</a>
            
            
        </div>
    )
}

export default Buttons
