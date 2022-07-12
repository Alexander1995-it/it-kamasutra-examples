import React, {useState} from "react";
import {RatingValue} from "../../App";

type RatingPropsType = {
    value: RatingValue
    onClick: (value: RatingValue) => void
}

export function Rating(props: RatingPropsType) {


    return (
        <div style={{display: 'flex'}}>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValue) => void
    value: RatingValue
}

function Star(props: StarPropsType) {

    return (
        <div onClick={() => props.onClick(props.value)}>
            {props.selected
                ? <span><b>Star</b> </span>
                : <span>Star </span>
            }
        </div>
    )

}