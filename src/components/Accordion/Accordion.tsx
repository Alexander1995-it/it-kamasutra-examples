import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} accordionCollapsed={props.accordionCollapsed}
                            onClick={props.onClick}/>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onclickCollapsedHandler = () => {
        props.onClick(!props.accordionCollapsed)
    }
    return (
        <h3 onClick={onclickCollapsedHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

export default Accordion;