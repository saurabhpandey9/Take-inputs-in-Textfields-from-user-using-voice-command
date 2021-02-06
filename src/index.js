import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Textfield from './form';

import Instructions from "./instructions";
import reportWebVitals from './reportWebVitals';
import './Textcss.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <table className="table1">
        <tr>
          <td>
            <div>
              <Textfield />
            </div>
          </td>

          <td>
            <div>
              <Instructions />
            </div>
          </td>
        </tr>


      </table>

    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
