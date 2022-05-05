import { useState } from 'react';
import './index.scss';

const InputComponent = (props) => {
    const { prefix, defaultValue } = props;
    const [inputValue, setInputValue] = useState('');

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className='input-container'>
            <input 
                className='input-field' 
                value={inputValue} 
                onChange={changeHandler}
                defaultValue={defaultValue} />
            <div className='input-prefix'>
                {prefix}
            </div>
        </div>
    );
}

export default InputComponent;