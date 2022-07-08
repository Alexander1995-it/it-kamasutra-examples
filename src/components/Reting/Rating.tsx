import React, {useState} from "react";

export function Rating() {

    const [title, setTitle] = useState(0)

    const onClickHandler = (id: number) => {
        setTitle(id)
    }
    return (
        <div style={{display: 'flex'}}>
            <div onClick={() => onClickHandler(1)}><Star selected={title > 0}/></div>
            <div onClick={() => onClickHandler(2)}><Star selected={title > 1}/></div>
            <div onClick={() => onClickHandler(3)}><Star selected={title > 2}/></div>
            <div onClick={() => onClickHandler(4)}><Star selected={title > 3}/></div>
            <div onClick={() => onClickHandler(5)}><Star selected={title > 4}/></div>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    return (
        <div>
            {props.selected
                ? <span><b>Star</b> </span>
                : <span>Star </span>
            }
        </div>
    )

}