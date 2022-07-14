import React, { useState } from 'react'


const VariableConCol2 = ({col2ReactionFunc, temperatureV, temperatureVTime, pressureV, pressureVTime, flowRateV, flowRateVTime, timeT, timeP, timeF}) => {
    const swapScreen = (e) => {
        e.preventDefault();
        col2ReactionFunc();
    }

    const showTemp = () => {
        for(let i=0; i < temperatureV.length; i++) {
            <div>{temperatureV[i]}</div>
            console.log(i);
            console.log(temperatureV[i]);
        }
        console.log(temperatureV.length);
    }





    //creating a map of new div jsx objects to be displayed to iterate through the state list

    let renderedOutputT = temperatureV.map(item => <div>{item}</div>)
    let renderedOutputTTime = timeT.map(item => <div>{item}</div>)
    let renderedOutputP = pressureV.map(item => <div>{item}</div>)
    let renderedOutputPTime = timeP.map(item => <div>{item}</div>)
    let renderedOutputF = flowRateV.map(item => <div>{item}</div>)
    let renderedOutputFTime = timeF.map(item => <div>{item}</div>)


    return (
        <div>
            Variable Conditions
            Variable Temperature Time Stamps:
          
            

            <div>Temp: {renderedOutputT}</div>
            <div>Time: {renderedOutputTTime}</div>
            <div>Pressure: {renderedOutputP}</div>
            <div>Time: {renderedOutputPTime}</div>
            <div>FlowRate: {renderedOutputF}</div>
            <div>Time: {renderedOutputFTime}</div>
            <button className='button-75' onClick={swapScreen}>Back</button>
        </div>
    )
}

export default VariableConCol2
