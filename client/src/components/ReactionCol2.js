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
        <div className='rc2container'>
            <h2 className='rc21'>Current Conditions:</h2>
            <h3 className='rc22'>Electrode 1: {electrode1}<sup>{charge}</sup></h3>
            <h3 className='rc23'>Electrode 2: {electrode2}<sup>{charge2}</sup></h3>
            <h3 className='rc24'>Temperature: {temperature}</h3>
            <h3 className='rc25'>Flow Rate: {flowRate}</h3>
            <h3 className='rc26'>Pressure: {pressure}</h3>
            <h3 className='rc27'>Reagent 1: {reagent1}</h3>
            <h3 className='rc28'>Reagent 2: {reagent2}</h3>
            <h3 className='rc29'>Electrode Distance: {electrodeDistance}</h3>
            <h3 className='rc30'>Electrode Area: {electrodeArea}</h3>
            <h3 className='rc31'>Variable Conditions: {conditionsSet} <button className='button-75' onClick={swapScreenV}>View</button></h3>
            <h3 className='rc32'>Tubing: {conditionsSetTube} <button className='button-75' onClick={swapScreenT}>View</button></h3>
        </div>
    )
}

export default ReactionCol2
