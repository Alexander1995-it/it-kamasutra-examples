import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    children: string
    isInclude: boolean
    onClick: () => void
    style: string
}
const Button = (props: ButtonPropsType) => {

    return (
        <div onClick={() => props.onClick()} className={s[props.style]}>
            <div className={s.children}>{props.children}</div>
        </div>
    );
};

export default Button;