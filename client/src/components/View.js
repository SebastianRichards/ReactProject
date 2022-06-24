import React from 'react'

const View = () => {
    return (
        <div>
            <div className='viewContainer'>
                <div className='viewCol1'>
                    <div>Saved Microreactors:</div>
                    <div className='view3Buttons'>
                        <button>Run</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                <div className='viewCol2'>
                    <div className="viewContainer2">
                        <div className='view2Col1'>
                            Variable conditions changed:

                        </div>
                        <div className='view2Col2'>
                            Time elapsed:

                        </div>
                        <div className='view2Col3'>
                            Variable Conditions qued:

                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default View
