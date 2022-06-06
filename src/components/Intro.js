import React from 'react'
import Buttons from './Buttons'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { useState } from 'react'

const Intro = ({Login, guestLogin, signUp, successNull, errorNull}) => {


    const [showButtons, setShowButtons] = useState(true)

    const [showSignIn, setShowSignIn] = useState(false)
    

    const showSignInBtn = () => {
        if (!showSignIn) {
           setShowSignIn(true)
           setShowButtons(false)
           successNull();
        } else {
           setShowSignIn(false)
        }
     }

    const [showSignUp, setShowSignUp] = useState(false)
    const showSignUpBtn = () => {
        if (!showSignIn) {
           setShowSignUp(true)
           setShowButtons(false)
           successNull();

        } else {
           setShowSignUp(false)
        }
     }
    

    const backBtn = () => {
        if (showSignIn) {
            setShowSignIn(false)
            setShowButtons(true)

        } else if (showSignUp) {
            setShowSignUp(false)
            setShowButtons(true)
        }
        errorNull();
        
    }

    

    


    

    return (
        <div>
            <div className='introBox'>
                <div className='titleMicroReactor'>
                    CARDIFF MICROREACTOR
                </div>
                {showButtons && <Buttons showSignInBtn={showSignInBtn} guestLogin={guestLogin} showSignUpBtn={showSignUpBtn}/>}
                {showSignIn && <SignIn backBtn={backBtn} Login={Login}/>}
                {showSignUp && <SignUp backBtn={backBtn} signUp={signUp}/>}
                
                
                
            </div>
        </div>
    )
}

export default Intro
