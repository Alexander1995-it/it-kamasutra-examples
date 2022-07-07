import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}
function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed} />
            {!collapsed && <AccordionBody />}
        </div>

    )
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: any
    collapsed: boolean
}
function AccordionTitle(props: AccordionTitlePropsType) {
    const onclickCollapsedHandler = () => {
       props.setCollapsed(!props.collapsed)
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

export default UncontrolledAccordion;