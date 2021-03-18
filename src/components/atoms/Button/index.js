import React from 'react';
import './button.scss';

const ButtonCustom = ({title, ...rest}) => {
    return <button className="button" {...rest}>{title}</button>
}

export default ButtonCustom;
