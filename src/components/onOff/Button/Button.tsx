import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    children: string
    onClick: () => void
    style:  any
}
const Button = (props: ButtonPropsType) => {

    return (
        <div onClick={() => props.onClick()} style={props.style} className={s.btn__block}>
            <div className={s.children}>{props.children}</div>
        </div>
    );
};

export default Button;