import React, {useState} from "react";

export function UncontrolledRating() {

    const [value, setValue] = useState(0)


    return (
        <div style={{display: 'flex'}}>
            <Star value={1} setValue={setValue} selected={value > 0}/>
            <Star value={2} setValue={setValue} selected={value > 1}/>
            <Star value={3} setValue={setValue} selected={value > 2}/>
            <Star value={4} setValue={setValue} selected={value > 3}/>
            <Star value={5} setValue={setValue} selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    setValue: (value: number) => void
    selected: boolean
    value: number
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
             props.setValue (props.value)
    }
    return (
        <div onClick={onClickHandler}>
            {props.selected
                ? <span><b>Star</b> </span>
                : <span>Star </span>
            }
        </div>
    )

}