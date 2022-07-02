import React, {useState} from 'react';
import Button from "./Button/Button";
import s from './OnOff.module.css'

const OnOff = () => {
    const [isIncludeBtn1, setIsIncludeBtn1] = useState(true)
    const [isIncludeBtn2, setIsIncludeBtn2] = useState(false)

    let styleButton1 = isIncludeBtn1 ? 'active__green' : 'btn__block'
    let styleButton2 = isIncludeBtn2 ? 'active__red' : 'btn__block'

    const onClickBtnHandler1 = () => {
        setIsIncludeBtn1(true)
        setIsIncludeBtn2(false)
    }

    const onClickBtnHandler2 = () => {
        setIsIncludeBtn1(false)
        setIsIncludeBtn2(true)
    }

    return (
        <div>
            <Button style={styleButton1} onClick={onClickBtnHandler1} isInclude={isIncludeBtn1}>On</Button>
            <Button style={styleButton2} onClick={onClickBtnHandler2} isInclude={isIncludeBtn2}>Off</Button>
            <div className={s.circle__container}>
                <div className={isIncludeBtn1 ? s.circle__green : s.circle__red}></div>
            </div>
        </div>
    )
}

export default OnOff;