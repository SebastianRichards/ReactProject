import React, { useState } from 'react'


const EditElectrodeDimensions = ({setElectrodeDistance, setElectrodeArea}) => {

    const [details, setDetails] = useState({electrodeDistance: "", electrodeArea: ""});
    const [detailsED, setDetailsED] = useState("");
    const [detailsEA, setDetailsEA] = useState("");
    const[electrodeDError, setElectrodeDError] = useState("");

    
    const submitHandler = (e) => {
        e.preventDefault();
        //error prevention /^[0-9]+$/.test() checks all characters in string are digits
        if (/^[0-9]+$/.test(details.electrodeArea) && /^[0-9]+$/.test(details.electrodeDistance)) {
            setElectrodeDistance(details.electrodeDistance);
            setElectrodeArea(details.electrodeArea);
            setElectrodeDError("");
            
        } else {
            setElectrodeDError("Please enter integer values only for both input fields");
        }
        
    }


  
    return (
        <div>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Electrode Distance</label>
                    <input className='form-control' type='text' placeholder='Enter Electrode Distance' onChange={e => setDetails({...details, electrodeDistance: e.target.value})} value={details.electrodeDistance}></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Electrode Area</label>
                    <input className='form-control' type='text' placeholder='Enter Electrode Area' onChange={e => setDetails({...details, electrodeArea: e.target.value})} value={details.electrodeArea}></input>
                </div>
                <div className='buttonContainerTwo'>
                    <button type="submit" onClick={submitHandler} className="button-75 buttonsSign2" role="button"><span class="text">Submit</span></button>
                </div>
                <div>{electrodeDError}</div>  
            </form>
        
        </div>
    )
}

export default EditElectrodeDimensions
