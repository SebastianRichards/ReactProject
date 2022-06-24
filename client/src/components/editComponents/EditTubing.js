import React from 'react';
import { useState } from 'react';

const EditTubing = ({conditionsSetTube, setConditionsSetTube, tubeLength, setTubeLength, tubeDiameter, setTubeDiameter, loops, setLoops, material, setMaterial}) => {

    const [details, setDetails] = useState({tubeLength: "", tubeDiameter: "", loops: "", material: ""});

    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (/^[0-9]+$/.test(details.tubeLength) && /^[0-9]+$/.test(details.tubeDiameter) && /^[0-9]+$/.test(details.loops)) {
            setConditionsSetTube(prevCount => prevCount + 1);
            setTubeLength([...tubeLength, details.tubeLength]);
            setTubeDiameter([...tubeDiameter, details.tubeDiameter]);
            setLoops([...loops, details.loops]);
            setMaterial([...material, details.material]);
            setError("");
        } else {
            setError("Please enter integer values for the first three fields.");
        }
        
    } 
    return (
        <div>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Tube Length</label>
                    <input className='form-control' type='text' placeholder='Enter Tube Length' onChange={e => setDetails({...details, tubeLength: e.target.value})} value={details.tubeLength}></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Add Tube Diameter</label>
                    <input className='form-control' type='text' placeholder='Enter Tube Diameter' onChange={e => setDetails({...details, tubeDiameter: e.target.value})} value={details.tubeDiameter}></input>
                </div>
                <div className='signUpFormUser form-group'>
                    <label>Number of Loops</label>
                    <input className='form-control' type='text' placeholder='Enter Number of Loops' onChange={e => setDetails({...details, loops: e.target.value})} value={details.loops}></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Material</label>
                    <input className='form-control' type='text' placeholder='Enter Material' onChange={e => setDetails({...details, material: e.target.value})} value={details.material}></input>
                </div>
                <div className='buttonContainerTwo'>
                    <button className="button-75 buttonsSign2" onClick={submitHandler}><span class="text">Submit</span></button>
                </div>   
            </form>

            <div>{error}</div>
           
        
        </div>
    )
}

export default EditTubing
