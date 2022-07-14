import React, { useState } from 'react'


const EditVariableConditions = ({temperatureV, setTemperatureV, temperatureVTime, setTemperatureVTime, pressureV, setPressureV, pressureVTime, setPressureVTime, flowRateV, setFlowRateV, flowRateVTime, setFlowRateVTime, conditionsSet, setConditionsSet, timeT, setTimeT, timeF, setTimeF, timeP, setTimeP}) => {

//these details states will keep track of the inputs and change the props states being passed through, timev1s = timeV1 (seconds). timev1st = timeV1 seconds in tens etc
const [detailsT, setDetailsT] = useState({temperatureV: "", timeV1s: "", timeV1m: "", timeV1h: "", timeV1: ""});
const [detailsP, setDetailsP] = useState({pressureV: "", timeV2s: "", timeV2m: "", timeV2h: "", timeV2: ""});
const [detailsF, setDetailsF] = useState({flowRateV: "", timeV3s: "", timeV3m: "", timeV3h: "", timeV3: ""});

const [error, setError] = useState("");


// submit handlers for all submits


let counter = 0;

const submitHandlerT = (e) => {
    e.preventDefault();
    if (/^[0-9]+$/.test(detailsT.temperatureV) && /^[0-9]+$/.test(detailsT.timeV1s) && /^[0-9]+$/.test(detailsT.timeV1m) && /^[0-9]+$/.test(detailsT.timeV1h)) {
        setTemperatureV([...temperatureV, detailsT.temperatureV]);

        //since we have 3 input fields for secs, mins, hours, we need to convert all to seconds then set timev to that state which will be saved in database
        //converting hours/mins to seconds and also parsing them as an int so that the total doesn't concat strings
        let timeTh2s = parseInt(detailsT.timeV1h * 3600);
        let timeTm2s = parseInt(detailsT.timeV1m * 60);
        let timeTs2s = parseInt(detailsT.timeV1s)
        let timeTTotal = timeTs2s + timeTh2s + timeTm2s;
        //before setting the tempVTime we need to convert all the fields and calculate it into seconds
        setTemperatureVTime([...temperatureVTime, timeTTotal]);
        setTimeT([...timeT, `${detailsT.timeV1h}h:${detailsT.timeV1m}m:${detailsT.timeV1s}s`]);
        //keeps a count of all the variabled conditions created
        setConditionsSet(prevCount => prevCount + 1);
        //clears error
        

        setError("");
       
        
    } else {
        setError("Please enter integer values for all fields")
    }


}

const submitHandlerP = e => {
    e.preventDefault();
    if (/^[0-9]+$/.test(detailsP.pressureV) && /^[0-9]+$/.test(detailsP.timeV2s) && /^[0-9]+$/.test(detailsP.timeV2m) && /^[0-9]+$/.test(detailsP.timeV2h)) {
        setPressureV([...pressureV, detailsP.pressureV]);
        let timePh2s = parseInt(detailsP.timeV2h * 3600);
        let timePm2s = parseInt(detailsP.timeV2m * 60);
        let timePs2s = parseInt(detailsP.timeV2s)
        let timePTotal = timePs2s + timePh2s + timePm2s;
        setPressureVTime([...pressureVTime, timePTotal])
        setTimeP([...timeP, `${detailsP.timeV2h}h:${detailsP.timeV2m}m:${detailsP.timeV2s}s`]);
        setConditionsSet(prevCount => prevCount + 1);
        setError("");
    } else {
        setError("Please enter integer values for all fields")
    }
}

const submitHandlerF = e => {
    e.preventDefault();
    if (/^[0-9]+$/.test(detailsF.flowRateV) && /^[0-9]+$/.test(detailsF.timeV3s) && /^[0-9]+$/.test(detailsF.timeV3m) && /^[0-9]+$/.test(detailsF.timeV3h)) {
        setFlowRateV([...flowRateV, detailsF.flowRateV]);
        let timeFh2s = parseInt(detailsF.timeV3h * 3600);
        let timeFm2s = parseInt(detailsF.timeV3m * 60);
        let timeFs2s = parseInt(detailsF.timeV3s)
        let timeFTotal = timeFs2s + timeFh2s + timeFm2s;
        setFlowRateVTime([...flowRateVTime, timeFTotal]);
        setTimeF([...timeF, `${detailsF.timeV3h}h:${detailsF.timeV3m}m:${detailsF.timeV3s}s`]);
        setConditionsSet(prevCount => prevCount + 1);
        setError("");
    } else {
        setError("Please enter integer values for all fields")
    }
}
    return (
        <div>
            <form className='signUpForm'>
                <div className='signUpFormUser form-group'>
                    <label>Temperature</label>
                    <input className='form-control' type='text' placeholder='Enter Temperature' onChange={e => setDetailsT({...detailsT, temperatureV: e.target.value})} value={detailsT.temperatureV}></input>
                </div>
                <div className='hoursInputContainer'>
                    <div className='hoursInputContainerCol1'>
                        <label>Time(h)</label>
                        <input className='form-control' type='text' placeholder='Hours' onChange={e => setDetailsT({...detailsT, timeV1h: e.target.value})} value={detailsT.timeV1h}></input>
                    </div>
                    <div className="hoursInputContainerCol2">
                        <label>Time(m)</label>
                        <input className='form-control' type='text' placeholder='Minutes' onChange={e => setDetailsT({...detailsT, timeV1m: e.target.value})} value={detailsT.timeV1m}></input>
                    </div>
                    <div className="hoursInputContainerCol3">
                        <label>Time(s)</label>
                        <input className='form-control' type='text' placeholder='Seconds' onChange={e => setDetailsT({...detailsT, timeV1s: e.target.value})} value={detailsT.timeV1s}></input>
                    </div>
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
                <div className='hoursInputContainer'>
                    <div className='hoursInputContainerCol1'>
                        <label>Time(h)</label>
                        <input className='form-control' type='text' placeholder='Hours' onChange={e => setDetailsP({...detailsP, timeV2h: e.target.value})} value={detailsP.timeV2h}></input>
                    </div>
                    <div className="hoursInputContainerCol2">
                        <label>Time(m)</label>
                        <input className='form-control' type='text' placeholder='Minutes' onChange={e => setDetailsP({...detailsP, timeV2m: e.target.value})} value={detailsP.timeV2m}></input>
                    </div>
                    <div className="hoursInputContainerCol3">
                        <label>Time(s)</label>
                        <input className='form-control' type='text' placeholder='Seconds' onChange={e => setDetailsP({...detailsP, timeV2s: e.target.value})} value={detailsP.timeV2s}></input>
                    </div>
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
                <div className='hoursInputContainer'>
                    <div className='hoursInputContainerCol1'>
                        <label>Time(h)</label>
                        <input className='form-control' type='text' placeholder='Hours' onChange={e => setDetailsF({...detailsF, timeV3h: e.target.value})} value={detailsF.timeV3h}></input>
                    </div>
                    <div className="hoursInputContainerCol2">
                        <label>Time(m)</label>
                        <input className='form-control' type='text' placeholder='Minutes' onChange={e => setDetailsF({...detailsF, timeV3m: e.target.value})} value={detailsF.timeV3m}></input>
                    </div>
                    <div className="hoursInputContainerCol3">
                        <label>Time(s)</label>
                        <input className='form-control' type='text' placeholder='Seconds' onChange={e => setDetailsF({...detailsF, timeV3s: e.target.value})} value={detailsF.timeV3s}></input>
                    </div>
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
