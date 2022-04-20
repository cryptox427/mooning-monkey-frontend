import React from 'react';
import './index.css';

const ContainerComponent = (props) => {
    const { children } = props;
    return (
        <div className='custom-container'>
            {children}
        </div>
    )
}

export default ContainerComponent;