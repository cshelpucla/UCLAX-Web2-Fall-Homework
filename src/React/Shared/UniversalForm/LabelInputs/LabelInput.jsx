import React from 'react';
import styled from 'styled-components'
/*
import Template from '../../Template';

import Form from '../Form';
import Feedback from '../Feedback';
import Button from '../Controls/Button';
*/

import Input from '../Controls/Input';

const LabelInput = ({formField}) => {
    // functional component logic
    
    //console.log('LabelInput auction',auction)

    return (
        <LabelInputStyled  className='LabelInput'>
                <div className='label-container'>
                    <label htmlFor={formField.id}>
                            {formField.label}
                    </label>
                </div>
                <div className='control'>
                    <Input formField={formField}/>
                </div>
        </LabelInputStyled>
    )
}

export default LabelInput;

const LabelInputStyled = styled.div`
    display: flex;
    .label-container {
        flex: 0 0 40%
        text-align: right;
        padding: 10px;
        border: dashed 1px #eee;
    }

    label {
        font-size: 16px;
        font-weight: bold;
    }
 
    .control {
        flex: 0 0 60%
        padding: 10px;
        border: dashed 1px #eee;
    }
`