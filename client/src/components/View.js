import React from 'react';
import { useState, useEffect, useRef} from 'react';
import Axios from 'axios';
import { AccordionSummary } from '@material-ui/core';
import { LocalConvenienceStoreOutlined, SettingsBackupRestoreOutlined } from '@material-ui/icons';


const View = () => {
    //how parse works
    let w = '["wow", "wowww"]';
    const a = JSON.parse(w);
    // list of micro reactors already created shown in the first row
    const [mrViewList, setMrViewList] = useState([]);

    //state showing time shown in the bottom middle collumn
    //seconds
    const [timers, setTimers] = useState(0);
    //tens of seconds
    const [timerst, setTimerst] = useState(0);
    //mins
    const [timerm, setTimerm] = useState(0);
    //tens of minutes
    const [timermt, setTimermt] = useState(0);
    //hours
    const [timerh, setTimerh] = useState(0);
    //tens of hours
    const [timerht, setTimerht] = useState(0);
    //turns the timer on and off

    const [timerToggle, setTimerToggle] = useState(false);

    //switches run button to stop upon pressing

    const [buttonStateRun, setButtonStateRun] = useState(true);
    const [buttonStateStop, setButtonStateStop] = useState(false);

    //state that will hide/show the run/stop buttons upon clicking

    const [showStop, setShowStop] = useState(false);

    //state that will show the selected microreactors variable conditions that have been qued
    const [col3vc, setCol3vc] = useState("");

    //states will update the variable conditions qued when a mircroreactor is clicked on

    const [col2Temp, setCol2Temp] = useState("");
    const [col2TempTime, setCol2TempTime] = useState("");
    const [col2Pressure, setCol2Pressure] = useState("");
    const [col2PressureTime, setCol2PressureTime] = useState("");
    const [col2FlowRate, setCol2FlowRate] = useState("");
    const [col2FlowRateTime, setCol2FlowRateTime] = useState("");

    //states will update the variable conditions that have been executed in col 1

    const [col1Temp, setCol1Temp] = useState("");
    const [col1TempTime, setCol1TempTime] = useState("");
    const [col1Pressure, setCol1Pressure] = useState("");
    const [col1PressureTime, setCol1PressureTime] = useState("");
    const [col1FlowRate, setCol1FlowRate] = useState("");
    const [col1FlowRateTime, setCol1FlowRateTime] = useState("");

    




    let secs = 0;
    let secsTens = 0;
    let mins = 0;
    let minsTens = 0;
    let hours = 0;
    let hoursTens = 0;

    //instantly increments as set interval will delay by 1s on the first iteration
    const instantIncrements = () => {
        secs ++;
    }

    const timerid = useRef(0);
    // timer that starts when the run button is clicked
    const startTimer = () => {
        setButtonStateRun(false);
        setButtonStateStop(true);
        //avoids a double delay on first iteration
        instantIncrements();
        timerid.current = setInterval(() => {
            if (secs === 10) {
                secs = 0;
                //fixes a delay on first increment of secsTens
                if (secsTens === 0) {
                    setTimerst(1);
                    secsTens = 1;
                // increments minute by 1 once 60 seconds reached
                } else if (secsTens === 6) {
                    //fixes a delay on the first incremenet of minute
                    if (mins === 0) {
                        setTimerm(1);
                        mins = 1;
                    //increments tens of minutes after 10 minutes reached
                    } else if (mins === 10) {
                        //fixes a delay in the first increment of minuteTens
                        if (minsTens === 0) {
                            setTimermt(1);
                            minsTens = 1;
                        //increments hour by one once 60 minutes reached
                        } else if (minsTens === 6) {
                            minsTens = 0;
                            setTimermt(0);
                            //fixes delay on first hour
                            if (hours === 0) {
                                setTimerh(1);
                                hours = 1;
                            } else if (hours === 10) {
                                hours = 0;
                                setTimerh(0);
                                //fixes delay on first hourTens
                                if(hoursTens === 0) {
                                    setTimerht(1);
                                    hoursTens = 1;
                                    
                                }
                                setTimerht(hoursTens ++);
                            }
                            setTimerh(hours ++);
                        } 

                        setTimermt(minsTens ++);
                        
                        mins = 0

                        
                    }
                    
                    secsTens = 0;
                    setTimerm(mins ++);
                }
                setTimerst(secsTens ++);
            }
            setTimers(secs ++);
        }, 1000);
        
    }

    const stopTimer = () => {
        clearInterval(timerid.current);
        timerid.current = 0;
        setButtonStateRun(true);
        setButtonStateStop(false);
        secs = 0;
        secsTens = 0;
        mins = 0;
        minsTens = 0;
        hours = 0;
        hoursTens = 0;
        setTimers(0);
        setTimerst(0);
        setTimerm(0);
        setTimermt(0);
        setTimerh(0);
        setTimerht(0);
    }
    

    useEffect(() => {
        Axios.get("http://localhost:3001/getMicroreactors").then((response) => {
            setMrViewList(response.data);
        });
    }, []);

    

    const deleteMicroreactor = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
        setMrViewList(mrViewList.filter((val) => {
            return val.id != id;

        }))
    }

    
  
 

    

    
    return (
        <div>
            <div className='viewContainer'>
                <div className='viewCol1'>
                    <div>Saved Microreactors:</div>
                    <div className='view3Buttons'>
                        {mrViewList.map((mr) => {
                            return (
                                <div key={mr.name} onClick={() => {
                                   
                                   
                                   
                                    
                                    //converting string into list
                                    let listVcTemp = JSON.parse(mr.vcTemp);
                                    let listVcTempTime = JSON.parse(mr.vcTempTime);
                                    let listVcPressure = JSON.parse(mr.vcPressure);
                                    let listVcPressureTime = JSON.parse(mr.vcPressureTime);
                                    let listVcFlowRate = JSON.parse(mr.vcFlowRate);
                                    let listVcFlowRateTime = JSON.parse(mr.vcFlowRateTime);

                                 

                                    
                                    //e.g col2TempString is a string that will have all the list elements inserted into it from vcTemp in the database to be displayed in col2
                                    let col2TempString = "";
                                    let col2TempTimeString = "";
                                    let col2PressureString = "";
                                    let col2PressureTimeString = "";
                                    let col2FlowRateString = "";
                                    let col2FlowRateTimeString = "";
                                    //e.g concats the data together from the vcTemp
                                    for(let i=0; i<listVcTemp.length; i++) {
                                        col2TempString = col2TempString.concat(listVcTemp[i] + ", ");
                                    }
                                    //gets rid of the final ", " in the string and then sets the state to the string
                                    col2TempString = col2TempString.slice(0, -2);
                                    setCol2Temp(col2TempString);

                                    //same but for temp time
                                    for(let i=0; i<listVcTempTime.length; i++) {
                                        col2TempTimeString = col2TempTimeString.concat(listVcTempTime[i] + ", ");
                                    }
                       
                                    col2TempTimeString = col2TempTimeString.slice(0, -2);
                                    setCol2TempTime(col2TempTimeString);

                                    //same but for pressure
                                    for(let i=0; i<listVcPressure.length; i++) {
                                        col2PressureString = col2PressureString.concat(listVcPressure[i] + ", ");
                                    }
                                 
                                    col2PressureString = col2PressureString.slice(0, -2);
                                    setCol2Pressure(col2PressureString);

                                    //same but for pressure time
                                    for(let i=0; i<listVcPressureTime.length; i++) {
                                        col2PressureTimeString = col2PressureTimeString.concat(listVcPressureTime[i] + ", ");
                                    }
            
                                    col2PressureTimeString = col2PressureTimeString.slice(0, -2);
                                    setCol2PressureTime(col2PressureTimeString);

                                    //same but for flowRate
                                    for(let i=0; i<listVcFlowRate.length; i++) {
                                        col2FlowRateString = col2FlowRateString.concat(listVcFlowRate[i] + ", ");
                                    }
                                    col2FlowRateString = col2FlowRateString.slice(0, -2);
                                    setCol2FlowRate(col2FlowRateString);

                                    //same but for flowRate Time
                                    for(let i=0; i<listVcFlowRateTime.length; i++) {
                                        col2FlowRateTimeString = col2FlowRateTimeString.concat(listVcFlowRateTime[i] + ", ");
                                    }

                                    col2FlowRateTimeString = col2FlowRateTimeString.slice(0, -2);
                                    setCol2FlowRateTime(col2FlowRateTimeString);
                                }}>
                                    <div>Microreactor number: {mr.name}</div>
                                    {buttonStateRun && <button key={mr.name} onClick={startTimer}>Run</button>}
                                    {buttonStateStop && <button onClick={stopTimer}>Stop</button>}
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                <div className='viewCol2'>
                    <div className="viewContainer2">
                        <div className='view2Col1'>
                            <div>
                                Variable condition changes executed:
                            </div>
                            <div>
                                Temperature: {col1Temp}
                            </div>
                            <div>
                                Time: {col1TempTime}
                            </div>
                            <div>
                                Pressure: {col1Pressure}
                            </div>
                            <div>
                                Time: {col1PressureTime}
                            </div>
                            <div>
                                FlowRate: {col1FlowRate}
                            </div>
                            <div>
                                Time: {col1FlowRateTime}
                            </div>

                        </div>
                        <div className='view2Col2'>
                            Time elapsed: {timerht}{timerh}h:{timermt}{timerm}m:{timerst}{timers}s

                        </div>
                        <div className='view2Col3'>
                            <div>
                                Variable Conditions qued:
                            </div>
                            <div>
                                Temperature: {col2Temp}
                            </div>
                            <div>
                                Time: {col2TempTime}
                            </div>
                            <div>
                                Pressure: {col2Pressure}
                            </div>
                            <div>
                                Time: {col2PressureTime}
                            </div>
                            <div>
                                FlowRate: {col2FlowRate}
                            </div>
                            <div>
                                Time: {col2FlowRateTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default View
