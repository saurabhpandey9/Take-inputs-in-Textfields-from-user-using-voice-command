import React from 'react';
import ReactDOM from 'react-dom';
import './Textcss.css';


function Textfield() {

    return (


        <div >

            <form className="frm">

                <input type="text" id="patient id" placeholder="Patient ID" />

                <input type="text" id="patient name" placeholder="Patient Name" />

                <input type="text" id="gender" placeholder="Gender" />

                <input type="text" id="age" placeholder="Age" />

                <input type="text" id="referred by" placeholder="Referred by" />

                <input type="text" id="consulted by" placeholder="Consulted by" />

                <input type="text" id="premedication" placeholder="Premedication" />

                <input type="text" id="esophagus" placeholder="Esophagus" />

                <input type="text" id="stomach" placeholder="Stomach" />

                <input type="text" id="duodenum" placeholder="Duodenum" />

                <input type="text" id="impression" placeholder="Impression" />

                <input type="text" id="remarks" placeholder="Remarks" />

            </form>
        </div>


        




        

        

        
    );

}

export default Textfield;