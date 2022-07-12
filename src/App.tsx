import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import OnOff from "./components/onOff/OnOff";
import {UncontrolledRating} from "./components/Reting/UncontrolledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {Rating} from "./components/Reting/Rating";
import Accordion from "./components/Accordion/Accordion";

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValue>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div className="App">
            <OnOff/>
            {/*<UncontrolledAccordion/>*/}
            <Accordion accordionCollapsed={accordionCollapsed} onClick={setAccordionCollapsed} titleValue={'Menu'}/>
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
        </div>
    );
}

export default App;
