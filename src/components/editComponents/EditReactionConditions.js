import React from 'react'

const EditReactionConditions = () => {
    return (
        <div>
            <form className='signUpForm'>
            <div className='signUpFormUser form-group'>
                <label>Temperature</label>
                <input className='form-control' type='text' placeholder='Enter Temperature'></input>
            </div>
            <div className='signUpPass form-group'>
                <label>Flow Rate</label>
                <input className='form-control' type='password' placeholder='Enter Flow Rate'></input>
            </div>
            <div className='signUpConfirm form-group'>
                <label>Pressure</label>
                <input className='form-control' type='password' placeholder='Enter Pressure'></input>
            </div>
            <div className='buttonContainerTwo'>
                <button type="submit" className="button-75 buttonsSign2" role="button"><span class="text">Submit</span></button>
            </div>
        

            
        </form>
        
        </div>
    )
}

export default EditReactionConditions
