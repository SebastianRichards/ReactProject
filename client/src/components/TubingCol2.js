import React from 'react'

const TubingCol2 = ({col2ReactionFunc, tubeLength, tubeDiameter, loops, material}) => {

    const swapScreen = (e) => {
        e.preventDefault();
        col2ReactionFunc();
    }

    let renderedOutputTL = tubeLength.map(item => <div>{item}</div>)
    let renderedOutputTD = tubeDiameter.map(item => <div>{item}</div>)
    let renderedOutputL = loops.map(item => <div>{item}</div>)
    let renderedOutputM = material.map(item => <div>{item}</div>)
 

    return (
        <div>
            Tubing
            <div>
                Tube Length: {renderedOutputTL}
                Tube Diameter: {renderedOutputTD}
                Number of Loops: {renderedOutputL}
                Material: {renderedOutputM}
                
            </div>

            <button className='button-75' onClick={swapScreen}>Back</button>
        </div>
    )
}

export default TubingCol2
