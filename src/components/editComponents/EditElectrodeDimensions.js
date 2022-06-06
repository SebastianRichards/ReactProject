import React from 'react'

const EditElectrodeDimensions = () => {
    return (
        <div>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Electrode Distance</label>
                    <input className='form-control' type='text' placeholder='Enter Electrode Distance'></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Electrode Area</label>
                    <input className='form-control' type='password' placeholder='Enter Electrode Area'></input>
                </div>
                <div className='buttonContainerTwo'>
                    <button type="submit" className="button-75 buttonsSign2" role="button"><span class="text">Submit</span></button>
                </div>   
            </form>
        
        </div>
    )
}

export default EditElectrodeDimensions
