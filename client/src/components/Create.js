import React from 'react'
import { useState, useEffect } from 'react';
import EditElectrodeOne from './editComponents/EditElectrodeOne';
import EditElectrodeTwo from './editComponents/EditElectrodeTwo';
import EditReactionConditions from './editComponents/EditReactionConditions';
import EditElectrodeDimensions from './editComponents/EditElectrodeDimensions';
import EditReagentOne from './editComponents/EditReagentOne';
import EditReagentTwo from './editComponents/EditReagentTwo';
import EditTubing from './editComponents/EditTubing';
import EditVariableConditions from './editComponents/EditVariableConditions';
import ReactionCol2 from './ReactionCol2';
import VariableConCol2 from './VariableConCol2';
import TubingCol2 from './TubingCol2';
import ShowSaveError from './editComponents/ShowSaveError';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import { AlternateEmail, PhotoSizeSelectActualSharp } from '@material-ui/icons';


const Create = () => {

    

    //button toggle states

    const [showEditElectrodeOne, setShowEditElectrodeOne] = useState(false);
    const [showEditElectrodeTwo, setShowEditElectrodeTwo] = useState(false);
    const [showEditReactionConditions, setShowEditReactionConditions] = useState(false);
    const [showEditReagentOne, setShowEditReagentOne] = useState(false);
    const [showEditReagentTwo, setShowEditReagentTwo] = useState(false);
    const [showEditElectrodeDimensions, setShowEditElectrodeDimensions] = useState(false);
    const [showEditVariableConditions, setShowEditVariableConditions] = useState(false);
    const [showEditAddTubing, setShowEditAddTubing] = useState(false);
    const [showSaveError, setShowSaveError] = useState(false);

    const showList = [showEditElectrodeOne, showEditElectrodeTwo, showEditReactionConditions, showEditReagentOne
        , showEditReagentTwo, showEditElectrodeDimensions, showEditVariableConditions, showEditAddTubing, showSaveError];
    
    const setShowList = [setShowEditElectrodeOne, setShowEditElectrodeTwo, setShowEditReactionConditions, setShowEditReagentOne
        , setShowEditReagentTwo, setShowEditElectrodeDimensions, setShowEditVariableConditions, setShowEditAddTubing, setShowSaveError];    

    //Button toggle functions, for loop turns of all states be default then the if statement turns on the needed component for col 3 
    const displayElectrodes = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        if (showEditElectrodeOne) { 
            setShowEditElectrodeOne(false) 
        } else {
            setShowEditElectrodeOne(true); 
            setShowEditElectrodeTwo(true)};  
    }

    const displayReactionConditions = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        (showEditReactionConditions) ? setShowEditReactionConditions(false) : setShowEditReactionConditions(true); 
    }

    const displayReagents = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }

        if (showEditReagentOne) { 
            setShowEditReagentOne(false) 
        } else {
            setShowEditReagentOne(true); 
            setShowEditReagentTwo(true)};  
    }
    

    const displayReagentTwo = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        (showEditReagentTwo) ? setShowEditReagentTwo(false) : setShowEditReagentTwo(true); 
    }

    const displayElectrodeDimensions = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        (showEditElectrodeDimensions) ? setShowEditElectrodeDimensions(false) : setShowEditElectrodeDimensions(true); 
    }

    const displayVariableConditions = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        (showEditVariableConditions) ? setShowEditVariableConditions(false) : setShowEditVariableConditions(true); 
    }

    const displayAddTubing = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        (showEditAddTubing) ? setShowEditAddTubing(false) : setShowEditAddTubing(true); 
    }

    const displayShowSaveError = () => {
        for (let i=0; i < showList.length; i++) {
            setShowList[i](false);
        }
        setShowSaveError(true);
    }

    //change center collumn states

    const [electrode1, setElectrode1] = useState("");

    const [electrode2, setElectrode2] = useState("");

    const [reagent1, setReagent1] = useState("");

    const [reagent2, setReagent2] = useState("");

    const [electrodeDistance, setElectrodeDistance] = useState("");

    const [electrodeArea, setElectrodeArea] = useState("");

    const [temperature, setTemperature] = useState("");

    const [flowRate, setFlowRate] = useState("");

    const [pressure, setPressure] = useState("");

    const [temperatureV, setTemperatureV] = useState([]);

    const [temperatureVTime, setTemperatureVTime] = useState([]);

    const [pressureV, setPressureV] = useState([]);

    const [pressureVTime, setPressureVTime] = useState([]);

    const [flowRateV, setFlowRateV] = useState([]);

    const [flowRateVTime, setFlowRateVTime] = useState([]);

    //to render out in hours mins secs lets create 3 variables
    const [timeT, setTimeT] = useState([]);

    const [timeP, setTimeP] = useState([]);

    const [timeF, setTimeF] = useState([]);
    
    
        

    const [tubeLength, setTubeLength] = useState([]);

    const [tubeDiameter, setTubeDiameter] = useState([]);

    const [loops, setLoops] = useState([]);

    const [material, setMaterial] = useState([]);

    let finalStringVcTemp = "";
    let finalStringVcTempTime = "";
    let finalStringVcFlowRate = "";
    let finalStringVcFlowRateTime = "";
    let finalStringVcPressure = "";
    let finalStringVcPressureTime;


    //function to conve
    
    //this is a string that will be constructed to be stored in the database
    const populateVcTemp = () => {
        let stringVcTemp = ''
        //concatatinating all the different variable values in a string but in the format of a list
        for (let i=0; i<temperatureV.length; i++) {
            stringVcTemp = stringVcTemp.concat(`"${temperatureV[i]}", `);
        }
        //removing final space and comma and adding parenthesis
        stringVcTemp = stringVcTemp.slice(0, -2);
        finalStringVcTemp = "[" + stringVcTemp + "]";
        return finalStringVcTemp;
    }

    const populateVcTempTime = () => {
        let stringVcTempTime = ''
        //concatatinating all the different variable values in a string but in the format of a list
        for (let i=0; i<temperatureVTime.length; i++) {
            stringVcTempTime = stringVcTempTime.concat(`"${temperatureVTime[i]}", `);
        }
        //removing final space and comma and adding parenthesis
        stringVcTempTime = stringVcTempTime.slice(0, -2);
        finalStringVcTempTime = "[" + stringVcTempTime + "]";
        return finalStringVcTempTime;
    }

    const populateVcPressure = () => {
        let stringVcPressure = ''
        //concatatinating all the different variable values in a string but in the format of a list
        for (let i=0; i<pressureV.length; i++) {
            stringVcPressure = stringVcPressure.concat(`"${pressureV[i]}", `);
        }
        //removing final space and comma and adding parenthesis
        stringVcPressure = stringVcPressure.slice(0, -2);
        finalStringVcPressure = "[" + stringVcPressure + "]";
        return finalStringVcPressure;
    }

    const populateVcPressureTime = () => {
        let stringVcPressureTime = ''
        //concatatinating all the different variable values in a string but in the format of a list
        for (let i=0; i<pressureVTime.length; i++) {
            stringVcPressureTime = stringVcPressureTime.concat(`"${pressureVTime[i]}", `);
        }
        //removing final space and comma and adding parenthesis
        stringVcPressureTime = stringVcPressureTime.slice(0, -2);
        finalStringVcPressureTime = "[" + stringVcPressureTime + "]";
        return finalStringVcPressureTime;
    }

    const populateVcFlowRate = () => {
        let stringVcFlowRate = ''
        //concatatinating all the different variable values in a string but in the format of a list
        for (let i=0; i<flowRateV.length; i++) {
            stringVcFlowRate = stringVcFlowRate.concat(`"${flowRateV[i]}", `);
        }
        //removing final space and comma and adding parenthesis
        stringVcFlowRate = stringVcFlowRate.slice(0, -2);
        finalStringVcFlowRate = "[" + stringVcFlowRate + "]";
        return finalStringVcFlowRate;
    }

    const populateVcFlowRateTime = () => {
        let stringVcFlowRateTime = ''
        //concatatinating all the different variable values in a string but in the format of a list
        for (let i=0; i<flowRateVTime.length; i++) {
            stringVcFlowRateTime = stringVcFlowRateTime.concat(`"${flowRateVTime[i]}", `);
        }
        //removing final space and comma and adding parenthesis
        stringVcFlowRateTime = stringVcFlowRateTime.slice(0, -2);
        finalStringVcFlowRateTime = "[" + stringVcFlowRateTime + "]";
        return finalStringVcFlowRateTime;
    }



    const microReactor = [electrode1, electrode2, temperature, flowRate, pressure, reagent1, reagent2, electrodeDistance, electrodeArea];
    const microReactorNames = ["Electrode 1", "Electrode 2", "Temperature", "Flow Rate", "Pressure", "Reagent 1", "Reagent 2", "Electrode Distance", "Electrode Height"];

    


    //changing html center collumn to include sup tags for iron3 and 2
    

    const [charge, setCharge] = useState("");

    const [charge2, setCharge2] = useState("");

    // to display the list of set variables in col 2 or to replace it with tubing or variable conditions

    const [col2Reaction, setCol2Reaction] = useState(true);

    const [col2Variable, setCol2Variable] = useState(false);

    const [col2Tubing, setCol2Tubing] = useState(false);



    // functions to change col2 screens

    const col2VariableFunc = () => {
        setCol2Reaction(false);
        setCol2Tubing(false);
        setCol2Variable(true);
        

        
    }

    const col2ReactionFunc = () => {
        setCol2Tubing(false);
        setCol2Variable(false);
        setCol2Reaction(true);
    }

    const col2TubingFunc = () => {
        setCol2Reaction(false);
        setCol2Variable(false);
        setCol2Tubing(true);
    }

    let counter = 0;
    const [conditionsSet, setConditionsSet] = useState(counter);

    let counterTube = 0;
    const [conditionsSetTube, setConditionsSetTube] = useState(counterTube);

    const [saveErrorE1, setSaveErrorE1] = useState("");
    const [saveErrorE2, setSaveErrorE2] = useState("");
    const [saveErrorT, setSaveErrorT] = useState("");
    const [saveErrorF, setSaveErrorF] = useState("");
    const [saveErrorP, setSaveErrorP] = useState("");
    const [saveErrorR1, setSaveErrorR1] = useState("");
    const [saveErrorR2, setSaveErrorR2] = useState("");
    const [saveErrorED, setSaveErrorED] = useState("");
    const [saveErrorEA, setSaveErrorEA] = useState("");

    //will navigatge to view section upon saving passing in all params info on https://reactnavigation.org/docs/params/
    
    /*const successfulSave = () => {
        navigation.navigate('view', {
            MRElectrode1: electrode1,
            MRElectrode2: electrode2,
            MRTemperature: temperature,
            MRFlowRate: flowRate,
            MRPressure: pressure,
            MRReagent1: reagent1,
            MRReagent2: reagent2,
            MRElectrodeDistance: electrodeDistance,
            MRElectrodeArea: electrodeArea,
            MRTemperatureV: temperatureV,
            MRTemperatureVTime: temperatureVTime,
            MRPressureV: pressureV,
            MRPressureVTime: pressureVTime,
            MRFlowRateV: flowRateV,
            MRFlowRateVTime: flowRateVTime,
            MRTubeLength: tubeLength,
            MRTubeDiameter: tubeDiameter,
            MRLoops: loops,
            MRMaterial: material,
        })

    }*/

    
    const setSaveErrorList = [setSaveErrorE1, setSaveErrorE2, setSaveErrorT, setSaveErrorF, setSaveErrorP, setSaveErrorR1, setSaveErrorR2, setSaveErrorED, setSaveErrorEA];

    //setting a state object that will take an array of all saved microreactors (needed to deduce the id number the next microreactor will be saved as)


   
            
  
        //post microreactor data to back end

        

        const [mrCount, setMrCount] = useState(0);

    

        const mrCountChecker = () => {
            Axios.get("http://localhost:3001/getMicroreactors").then((response) => {

                    let newCount = response.data.length + 1;
                    setMrCount(newCount);
        
                }); 

        }


        useEffect(() => {
            Axios.get("http://localhost:3001/getMicroreactors").then((response) => {
                setMrCount(response.data.length + 1);
            });
        }, []);

        const postMicroreactor = () => {
            //converting all inputted variable condition values to string ready to be stored in database
            let finalStringVcTemp = populateVcTemp();
            let finalStringVcTempTime = populateVcTempTime();
            let finalStringVcPressure = populateVcPressure();
            let finalStringVcPressureTime = populateVcPressureTime();
            let finalStringVcFlowRate = populateVcFlowRate();
            let finalStringVcFlowRateTime = populateVcFlowRateTime();
            let userStored = localStorage.getItem("userUsername");

            Axios.post("http://localhost:3001/postMicroreactor", {
                user: userStored,
                name: mrCount,
                electrodeOne: electrode1,
                electrodeTwo: electrode2,
                temperature: temperature,
                pressure: pressure,
                flowRate: flowRate,
                reagentOne: reagent1,
                reagentTwo: reagent2,
                electrodeDistance: electrodeDistance,
                electrodeArea: electrodeArea,
                vcTemp: finalStringVcTemp,
                vcTempTime: finalStringVcTempTime,
                vcPressure: finalStringVcPressure,
                vcPressureTime: finalStringVcPressureTime,
                vcFlowRate: finalStringVcFlowRate,
                vcFlowRateTime: finalStringVcFlowRateTime,
                


            }).then((response) => {
                console.log(response);
               
            })};
            
    
        

    let navigate = useNavigate();
    const save = () => {
        mrCountChecker();
        for(let i=0; i < microReactor.length; i++) {
            setSaveErrorList[i]("");
            if (microReactor[i] === "") {
                setSaveErrorList[i]("Please submit: " + microReactorNames[i]);
                displayShowSaveError();
            } 
        }
        //this counter will only increase if data is submitted, every iteration has data then the function proceeds
        let mrcounterverify = 0;
        for(let i=0; i < microReactor.length; i++) {
            if (microReactor[i] !== "") {
                mrcounterverify ++;
            }
        
        }

        if (mrcounterverify === 9) {

            postMicroreactor();

            return navigate('/view');
        }
    
    
    }



    

    


    return (
        <div className='createContainer'>
            <div className='createCol1'>
                <div className='createButton1'>
                    <button onClick={displayElectrodes} className="button-76 introItem1" role="button"><span class="text">Edit Electrodes</span></button>
                </div>
                <div className='createButton2'>
                    <button onClick={displayReactionConditions} className="button-76 introItem1" role="button"><span class="text">Edit Reaction Conditions</span></button>
                </div>
                <div className='createButton3'>
                    <button onClick={displayReagents} className="button-76 introItem1" role="button"><span class="text">Edit Reagents</span></button>
                </div>
                <div className='createButton4'>
                    <button onClick={displayElectrodeDimensions} className="button-76 introItem1" role="button"><span class="text">Edit Electrode Dimensions</span></button>
                </div>
                <div className='createButton5'>
                    <button onClick={displayVariableConditions} className="button-76 introItem1" role="button"><span class="text">Edit Variable Conditions</span></button>
                </div>
                <div className='createButton6'>
                    <button onClick={displayAddTubing} className="button-76 introItem1" role="button"><span class="text">Add Tubing</span></button>
                </div>
                <div className='createButton7'>
                    <button onClick={save} className="button-76 introItem1" role="button"><span class="text">Save</span></button>
                </div>
            </div>
            <div className='createCol2'>
                {(col2Reaction && <ReactionCol2 electrode1={electrode1} charge={charge} electrode2={electrode2} charge2={charge2} temperature={temperature} flowRate={flowRate} pressure={pressure} 
                    reagent1={reagent1} reagent2={reagent2} electrodeDistance={electrodeDistance} electrodeArea={electrodeArea} col2VariableFunc={col2VariableFunc} col2TubingFunc={col2TubingFunc} conditionsSet={conditionsSet} conditionsSetTube={conditionsSetTube}/>)}
                {(col2Variable && <VariableConCol2 col2ReactionFunc={col2ReactionFunc} temperatureV={temperatureV} temperatureVTime={temperatureVTime} pressureV={pressureV} pressureVTime={pressureVTime} flowRateV={flowRateV} flowRateVTime={flowRateVTime} timeT={timeT} timeF={timeF} timeP={timeP}/>)}
                {(col2Tubing && <TubingCol2 col2ReactionFunc={col2ReactionFunc} tubeLength={tubeLength} tubeDiameter={tubeDiameter} loops={loops} material={material}/>)}
     
            </div>
            <div className='createCol3'>
                {(showEditElectrodeOne && <EditElectrodeOne electrode1={electrode1} setElectrode1={setElectrode1} charge={charge} setCharge={setCharge}/>)}
                {(showEditElectrodeTwo && <EditElectrodeTwo electrode2={electrode2} setElectrode2={setElectrode2} charge2={charge2} setCharge2={setCharge2}/>)}
                {(showEditReactionConditions && <EditReactionConditions setTemperature={setTemperature} setFlowRate={setFlowRate} setPressure={setPressure}/>)}
                {(showEditReagentOne && <EditReagentOne reagent1={reagent1} setReagent1={setReagent1}/>)}
                {(showEditReagentTwo && <EditReagentTwo reagent2={reagent2} setReagent2={setReagent2}/>)}
                {(showEditElectrodeDimensions && <EditElectrodeDimensions setElectrodeDistance={setElectrodeDistance} setElectrodeArea={setElectrodeArea}/>)}
                {(showEditVariableConditions && <EditVariableConditions temperatureV={temperatureV} setTemperatureV={setTemperatureV} temperatureVTime={temperatureVTime} setTemperatureVTime = {setTemperatureVTime} timeT={timeT} setTimeT={setTimeT} timeP={timeP} setTimeP={setTimeP} timeF={timeF} setTimeF={setTimeF}
                pressureV={pressureV} setPressureV={setPressureV} pressureVTime={pressureVTime} setPressureVTime={setPressureVTime} flowRateV={flowRateV} setFlowRateV={setFlowRateV} flowRateVTime={flowRateVTime} setFlowRateVTime={setFlowRateVTime} conditionsSet={conditionsSet} setConditionsSet={setConditionsSet}/>)}
                {(showEditAddTubing && <EditTubing conditionsSetTube={conditionsSetTube} setConditionsSetTube={setConditionsSetTube} tubeLength={tubeLength} setTubeLength={setTubeLength} tubeDiameter={tubeDiameter} setTubeDiameter={setTubeDiameter} loops={loops} setLoops={setLoops} material={material} setMaterial={setMaterial}/>)}
                {(showSaveError && <ShowSaveError saveErrorE1={saveErrorE1} saveErrorE2={saveErrorE2} saveErrorT={saveErrorT} saveErrorF={saveErrorF} saveErrorP={saveErrorP} saveErrorR1={saveErrorR1} saveErrorR2={saveErrorR2} saveErrorED={saveErrorED} saveErrorEA={saveErrorEA}/>)}
                
            </div>
      
        </div>
    )
}

export default Create
