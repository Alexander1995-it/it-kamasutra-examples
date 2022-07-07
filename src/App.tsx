import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnOff from "./components/onOff/OnOff";
import {Rating} from "./components/Reting/Rating";
import UncontrolledAccordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Rating/>
        </div>
    );
}

export default App;
