import React from 'react'
import { useState } from 'react';


const ReactionCol2 = ({electrode1, charge, electrode2, charge2, temperature, flowRate, pressure, reagent1, reagent2, electrodeDistance, electrodeArea, col2VariableFunc, col2TubingFunc, conditionsSet, conditionsSetTube}) => {
    const swapScreenV = (e) => {
        e.preventDefault();
        col2VariableFunc();
    }

    

    const swapScreenT = (e) => {
        e.preventDefault();
        col2TubingFunc();
    }

 
    

    return (
        <div>
            <h2>Current Conditions</h2>
            <h3>Electrode 1: {electrode1}<sup>{charge}</sup></h3>
            <h3>Electrode 2: {electrode2}<sup>{charge2}</sup></h3>
            <h3>Temperature: {temperature}</h3>
            <h3>Flow Rate: {flowRate}</h3>
            <h3>Pressure: {pressure}</h3>
            <h3>Reagent 1: {reagent1}</h3>
            <h3>Reagent 2: {reagent2}</h3>
            <h3>Electrode Distance: {electrodeDistance}</h3>
            <h3>Electrode Area: {electrodeArea}</h3>
            <h3>Variable Conditions: {conditionsSet} <button className='button-75' onClick={swapScreenV}>View</button></h3>
            <h3>Tubing: {conditionsSetTube} <button className='button-75' onClick={swapScreenT}>View</button></h3>
        </div>
    )
}

export default ReactionCol2
