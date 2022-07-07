import React, {useState} from 'react';
import Button from "./Button/Button";
import s from './OnOff.module.css'

const OnOff = () => {
    const [isIncludeBtn, setIsIncludeBtn] = useState(false)

    let styleButtonOn = {backgroundColor: isIncludeBtn ? 'green' : ''}
    let styleButtonOff = {backgroundColor: isIncludeBtn ? '' : 'red'}

    const onClickBtnHandlerOn = () => {
        setIsIncludeBtn(true)

    }

    const onClickBtnHandlerOff = () => {
        setIsIncludeBtn(false)

    }

    return (
        <div>
            <Button style={styleButtonOn} onClick={onClickBtnHandlerOn}>On</Button>
            <Button style={styleButtonOff} onClick={onClickBtnHandlerOff}>Off</Button>
            <div className={s.circle__container}>
                <div className={s.circle + ' ' + (isIncludeBtn ? s.green : s.red)}></div>
            </div>
        </div>
    )
}

export default OnOff;