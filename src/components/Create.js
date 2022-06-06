import React from 'react'
import { useState } from 'react';
import EditElectrodeOne from './editComponents/EditElectrodeOne';
import EditElectrodeTwo from './editComponents/EditElectrodeTwo';
import EditReactionConditions from './editComponents/EditReactionConditions';
import EditElectrodeDimensions from './editComponents/EditElectrodeDimensions';
import EditReagentOne from './editComponents/EditReagentOne';
import EditReagentTwo from './editComponents/EditReagentTwo';
import EditTubing from './editComponents/EditTubing';
import EditVariableConditions from './editComponents/EditVariableConditions';


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

    const showList = [showEditElectrodeOne, showEditElectrodeTwo, showEditReactionConditions, showEditReagentOne
        , showEditReagentTwo, showEditElectrodeDimensions, showEditVariableConditions, showEditAddTubing];
    
    const setShowList = [setShowEditElectrodeOne, setShowEditElectrodeTwo, setShowEditReactionConditions, setShowEditReagentOne
        , setShowEditReagentTwo, setShowEditElectrodeDimensions, setShowEditVariableConditions, setShowEditAddTubing];    

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

    //change center collumn states

    const [electrode1, setElectrode1] = useState("");

    const [electrode2, setElectrode2] = useState("");

    




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
                <div className='createButton6'>
                    <button onClick={displayElectrodeDimensions} className="button-76 introItem1" role="button"><span class="text">Edit Electrode Dimensions</span></button>
                </div>
                <div className='createButton7'>
                    <button onClick={displayVariableConditions} className="button-76 introItem1" role="button"><span class="text">Edit Variable Conditions</span></button>
                </div>
                <div className='createButton8'>
                    <button onClick={displayAddTubing} className="button-76 introItem1" role="button"><span class="text">Add Tubing</span></button>
                </div>
            </div>
            <div className='createCol2'>
                <h2>Current Conditions</h2>
                <h3>Electrode 1: {electrode1}</h3>
                <h3>Electrode 2: {electrode2}</h3>
                <h3>Temperature: </h3>
                <h3>Pressure: </h3>
                <h3>Flow Rate: </h3>
                <h3>Reagent 1: </h3>
                <h3>Reagent 2: </h3>
                <h3>Electrode 2: </h3>
                <h3>Electrode Area: </h3>
                <h3>Electrode Distance: </h3>
                <h3>Tubing: </h3>
                <h3>Variable Conditions: </h3>
            </div>
            <div className='createCol3'>
                {(showEditElectrodeOne && <EditElectrodeOne electrode1={electrode1} setElectrode1={setElectrode1}/>)}
                {(showEditElectrodeTwo && <EditElectrodeTwo electrode2={electrode2} setElectrode2={setElectrode2}/>)}
                {(showEditReactionConditions && <EditReactionConditions/>)}
                {(showEditReagentOne && <EditReagentOne/>)}
                {(showEditReagentTwo && <EditReagentTwo/>)}
                {(showEditElectrodeDimensions && <EditElectrodeDimensions/>)}
                {(showEditVariableConditions && <EditVariableConditions/>)}
                {(showEditAddTubing && <EditTubing/>)}
                
            </div>
      
        </div>
    )
}

export default Create
