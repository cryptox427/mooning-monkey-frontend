import { useState } from 'react';
import './index.scss';

const InputComponent = (props) => {
    const { prefix, defaultValue, type, valueChangeHandler } = props;
    const [inputValue, setInputValue] = useState('');

    const changeHandler = (e) => {
        valueChangeHandler(e.target.value);
    }

    return (
        <div className='input-container'>
            <input 
                className='input-field' 
                value={defaultValue} 
                onChange={changeHandler}
                type={type} />
            <div className='input-prefix'>
                {prefix}
            </div>
        </div>
    );
}

export default InputComponent;