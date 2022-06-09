import React, { useState } from 'react'


const EditVariableConditions = ({temperatureV, setTemperatureV, temperatureVTime, setTemperatureVTime, pressureV, setPressureV, pressureVTime, setPressureVTime, flowRateV, setFlowRateV, flowRateVTime, setFlowRateVTime, conditionsSet, setConditionsSet}) => {

const [detailsT, setDetailsT] = useState({temperatureV: "", timeV1: ""});
const [detailsP, setDetailsP] = useState({pressureV: "", timeV2: ""});
const [detailsF, setDetailsF] = useState({flowRateV: "", timeV3: ""});

const [error, setError] = useState("");


// submit handlers for all submits


let counter = 0;

const submitHandlerT = (e) => {
    e.preventDefault();
    if (/^[0-9]+$/.test(detailsT.temperatureV) && /^[0-9]+$/.test(detailsT.timeV1)) {
        setTemperatureV([...temperatureV, detailsT.temperatureV]);
        setTemperatureVTime([...temperatureVTime, detailsT.timeV1]);
        setConditionsSet(prevCount => prevCount + 1);
        setError("");
    } else {
        setError("Please enter two integer values for both fields")
    }


}

const submitHandlerP = e => {
    e.preventDefault();
    if (/^[0-9]+$/.test(detailsP.pressureV) && /^[0-9]+$/.test(detailsP.timeV2)) {
        setPressureV([...pressureV, detailsP.pressureV]);
        setPressureVTime([...pressureVTime, detailsP.timeV2])
        setConditionsSet(prevCount => prevCount + 1);
        setError("");
    } else {
        setError("Please enter two integer values for both fields")
    }
}

const submitHandlerF = e => {
    e.preventDefault();
    if (/^[0-9]+$/.test(detailsF.flowRateV) && /^[0-9]+$/.test(detailsF.timeV3)) {
        setFlowRateV([...flowRateV, detailsF.flowRateV])
        setFlowRateVTime([...flowRateVTime, detailsF.timeV3])
        setConditionsSet(prevCount => prevCount + 1);
        setError("");
    } else {
        setError("Please enter two integer values for both fields")
    }
}
    return (
        <div>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Temperature</label>
                    <input className='form-control' type='text' placeholder='Enter Temperature' onChange={e => setDetailsT({...detailsT, temperatureV: e.target.value})} value={detailsT.temperatureV}></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Time</label>
                    <input className='form-control' type='text' placeholder='Enter Time' onChange={e => setDetailsT({...detailsT, timeV1: e.target.value})} value={detailsT.timeV1}></input>
                </div>
                <div className='buttonContainerTwo'>
                    <button className="button-75 buttonsSign2" onClick={submitHandlerT}><span class="text" id="onez">Submit</span></button>
                </div>   
            </form>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Pressure</label>
                    <input className='form-control' type='text' placeholder='Enter Pressure' onChange={e => setDetailsP({...detailsP, pressureV: e.target.value})} value={detailsP.pressureV}></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Time</label>
                    <input className='form-control' type='text' placeholder='Enter Time' onChange={e => setDetailsP({...detailsP, timeV2: e.target.value})} value={detailsP.timeV2}></input>
                </div>
                <div className='buttonContainerTwo'>
                    <button className="button-75 buttonsSign2" onClick={submitHandlerP}><span class="text">Submit</span></button>
                </div>   
            </form>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Flow Rate</label>
                    <input className='form-control' type='text' placeholder='Enter Flow Rate' onChange={e => setDetailsF({...detailsF, flowRateV: e.target.value})} value={detailsF.flowRateV}></input>
                </div>
                <div className='signUpPass form-group'>
                    <label>Time</label>
                    <input className='form-control' type='text' placeholder='Enter Time' onChange={e => setDetailsF({...detailsF, timeV3: e.target.value})} value={detailsF.timeV3}></input>
                </div>
                <div className='buttonContainerTwo'>
                    <button className="button-75 buttonsSign2" onClick={submitHandlerF}><span class="text">Submit</span></button>
                </div>   
            </form>
            <div>{error}</div>
        
        </div>
    )
}

export default EditVariableConditions
