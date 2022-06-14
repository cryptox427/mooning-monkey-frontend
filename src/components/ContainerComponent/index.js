import React from 'react';
import './index.css';

const ContainerComponent = (props) => {
    const { children, className } = props;
    return (
        <div className={`custom-container ${className}`}>
            {children}
        </div>
    )
}

export default ContainerComponent;