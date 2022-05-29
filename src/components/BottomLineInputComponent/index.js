import { useState } from 'react';
import { MDBInput } from "mdbreact";
import './index.scss';

const BottomLineInputComponent = (props) => {
    const { prefix, defaultValue, type, valueChangeHandler, className, label } = props;
    const [inputValue, setInputValue] = useState('');

    const changeHandler = (e) => {
        valueChangeHandler(e.target.value);
    }

    return (
        <div className={`input-container ${className}`}>
            <MDBInput label={label} value={defaultValue} onChange={changeHandler} background size="sm" type={type}/>
            <div className='input-prefix'>
                {prefix}
            </div>
        </div>
    );
}

export default BottomLineInputComponent;