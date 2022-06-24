import React from 'react'
import { useState } from 'react';

const EditReagentTwo = ({reagent2, setReagent2}) => {


    const [changeStyle1, setChangeStyle1] = useState(false);
    const [changeStyle2, setChangeStyle2] = useState(false);
    const [changeStyle3, setChangeStyle3] = useState(false);
    const [changeStyle4, setChangeStyle4] = useState(false);
    const [changeStyle5, setChangeStyle5] = useState(false);
    const [changeStyle6, setChangeStyle6] = useState(false);
    const [changeStyle7, setChangeStyle7] = useState(false);
    const [changeStyle8, setChangeStyle8] = useState(false);
    const [changeStyle9, setChangeStyle9] = useState(false);
    const [changeStyle10, setChangeStyle10] = useState(false);

    const elements =["Benzene", "Toluene", "Methylene", "Iron3", "Hydrogen", "Iron2", "Sodium", "Calcium", "Lithium", "Nickel"];

    const stateList = [changeStyle1, changeStyle2, changeStyle3, changeStyle4, changeStyle5, changeStyle6, changeStyle7, changeStyle8, changeStyle9, changeStyle10];

    const stateListFunc = [setChangeStyle1, setChangeStyle2, setChangeStyle3, setChangeStyle4, setChangeStyle5, setChangeStyle6, setChangeStyle7, setChangeStyle8, setChangeStyle9, setChangeStyle10];


    const changeLiStyle = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle1 ? setChangeStyle1(false) : setChangeStyle1(true));  
    }

    const changeLiStyle2 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle2 ? setChangeStyle2(false) : setChangeStyle2(true));  
    }

    const changeLiStyle3 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle3 ? setChangeStyle3(false) : setChangeStyle3(true));  
    }

    const changeLiStyle4 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle4 ? setChangeStyle4(false) : setChangeStyle4(true));  
    }

    const changeLiStyle5 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle5 ? setChangeStyle5(false) : setChangeStyle5(true));  
    }

    const changeLiStyle6 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle6 ? setChangeStyle6(false) : setChangeStyle6(true));  
    }

    const changeLiStyle7 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle7 ? setChangeStyle7(false) : setChangeStyle7(true));  
    }

    const changeLiStyle8 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle8 ? setChangeStyle8(false) : setChangeStyle8(true));  
    }

    const changeLiStyle9 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle9 ? setChangeStyle9(false) : setChangeStyle9(true));  
    }

    const changeLiStyle10 = () => {
        for(let i = 0; i < stateList.length; i++) {
            stateListFunc[i](false);
        }
        (changeStyle10 ? setChangeStyle10(false) : setChangeStyle10(true));  
    }

    // changes state for center collumn and uses charge state to use in sup tag for the html presentation

    const submitHandler = () => {
        for(let i = 0; i < stateList.length; i++) {
            if(stateList[i] === true) {
                setReagent2(elements[i]);
            }       
        }
    }


    return (
        <div>
            <ul className='editElectrodeBox'>
            <li className={changeStyle1 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle} id='elementOne'>Benzene</li>
                <li className={changeStyle2 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle2} id='2'>Toluene</li>
                <li className={changeStyle3 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle3} id='3'>Methylene</li>
                <li className={changeStyle4 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle4} id='4'>Iron<sup>3+</sup></li>
                <li className={changeStyle5 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle5} id='5'>Hydrogen</li>
                <li className={changeStyle6 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle6}id='6'>Iron<sup>2+</sup></li>
                <li className={changeStyle7 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle7} id='7'>Sodium</li>
                <li className={changeStyle8 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle8} id='8'>Calcium</li>
                <li className={changeStyle9 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle9} id='9'>Lithium</li>
                <li className={changeStyle10 ? 'electrodeBoxItem selected' : 'electrodeBoxItem'} onClick={changeLiStyle10} id='10'>Nickel</li>
            </ul>
            <button className='button-75' onClick={submitHandler}>Submit Reagent Two</button>     
        </div>
    )
}

export default EditReagentTwo
