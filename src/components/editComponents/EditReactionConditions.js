import React, { useState } from 'react'

const EditReactionConditions = ({setTemperature, setFlowRate, setPressure}) => {

    const[reactionError, setReactionError] = useState("");
    const[details, setDetails] = useState({temperature: "", flowRate: "", pressure: ""});



    const submitHandler = (e) => {
        e.preventDefault();
        if (/^[0-9]+$/.test(details.temperature) && /^[0-9]+$/.test(details.flowRate) && /^[0-9]+$/.test(details.pressure)) {
            setTemperature(details.temperature);
            setFlowRate(details.flowRate);
            setPressure(details.pressure);
            setReactionError("");    
        } else {
            setReactionError("Please enter integer values only for all input fields");
        }

    }
    return (
        <div>
            <form className='signUpForm'>
            <div className='signUpFormUser form-group'>
                <label>Temperature</label>
                <input className='form-control' type='text' placeholder='Enter Temperature' onChange={e => setDetails({...details, temperature: e.target.value})} value={details.temperature}></input>
            </div>
            <div className='signUpPass form-group'>
                <label>Flow Rate</label>
                <input className='form-control' type='text' placeholder='Enter Flow Rate' onChange={e => setDetails({...details, flowRate: e.target.value})} value={details.flowRate}></input>
            </div>
            <div className='signUpConfirm form-group'>
                <label>Pressure</label>
                <input className='form-control' type='text' placeholder='Enter Pressure' onChange={e => setDetails({...details, pressure: e.target.value})} value={details.pressure}></input>
            </div>
            <div className='buttonContainerTwo'>
                <button type="submit" className="button-75 buttonsSign2" role="button" onClick={submitHandler}><span class="text">Submit</span></button>
            </div>
            <div>{reactionError}</div>
        

            
        </form>
        
        </div>
    )
}

export default EditReactionConditions
