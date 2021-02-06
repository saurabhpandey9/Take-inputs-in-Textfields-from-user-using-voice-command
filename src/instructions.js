import React from 'react';
import './Textcss.css';
import Dictaphone from "./speech";

function Instructions() {

    return (
        <div className="instruction">

            <h1 className="heading-h1">Instructions:-</h1>

            <p>
                Please press the <b>Spacebar Button</b> to on/off the speech recognition.
            </p>

            <h2>Sample Commands for User Interaction : </h2>

            <p> <b>Note:</b> Please use <b>clear</b> command if required ,to clear the current transcript generated if any, then use any other commands.
            Sometime the length of string becomea larger and take more time to parse words for comparison hence clear command is required.
            </p>
            <ul>
                <li>If you want to interfact with any Text Field just take field name and then the value you want to fill like <b><i> Patient id 342345 </i></b> 
                then it will parse everyting after <b> Patient id </b>and fill it in Patient id text-field</li>

                <li> This process is similar for all text-fields.</li>
                <li> Sometimes it stop taking argument , then just say <b>Clear</b> to clear all the garbage transcript and then start Interacting again.</li>
            </ul>

            <div className="Dictaphone-css">
            <h4 style={{textAlign:'center'}}>TRANSCRIPT</h4>
            <Dictaphone />
            </div>


        </div>

    );

}

export default Instructions;