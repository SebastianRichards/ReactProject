import React from 'react'

const ShowSaveError = ({saveErrorE1, saveErrorE2, saveErrorT, saveErrorF, saveErrorP, saveErrorR1, saveErrorR2, saveErrorED, saveErrorEA}) => {

    
    
    
    

    return (
        <div>
            <div className='errorContainer'>
                <div className='errorRow1'>{saveErrorE1}</div>
                <div className='errorRow2'>{saveErrorE2}</div>
                <div className='errorRow3'>{saveErrorT}</div>
                <div className='errorRow4'>{saveErrorF}</div>
                <div className='errorRow5'>{saveErrorP}</div>
                <div className='errorRow6'>{saveErrorR1}</div>
                <div className='errorRow7'>{saveErrorR2}</div>
                <div className='errorRow8'>{saveErrorED}</div>
                <div className='errorRow9'>{saveErrorEA}</div>
                <div className='errorRow10'>{saveErrorE2}</div>
            
            </div>
        
        </div>
    )
}

export default ShowSaveError
