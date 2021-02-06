import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


var flag =1;

const Dictaphone = () => {
  const [message, setMessage] = useState('')
  const commands = [

    {
      command: ['clear','care'],
      callback: ({ resetTranscript }) => resetTranscript()
    },

    {
        command: ['patient id *'],
        callback: function (params) {
        document.getElementById("patient id").value= params;
        resetTranscript()
        },
        // isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2
    },

    {
        command: ['patient name *','present name *','present names *'],
        callback: function (params) {
        document.getElementById("patient name").value= params;
        resetTranscript()
        }
    },

    {
        command: ['gender *','patient gender *'],
        callback: function (params) {
        document.getElementById("gender").value= params;
        resetTranscript()
        }
    },

    {
        command: ['age *','patient age *'],
        callback: function (params) {
        document.getElementById("age").value= params;
        resetTranscript()
        }
    },

    {
        command: ['referred by *'],
        callback: function (params) {
        document.getElementById("referred by").value= params;
        resetTranscript()
        },
        fuzzyMatchingThreshold: 0.2
    },

    {
        command: ['consulted by *'],
        callback: function (params) {
        document.getElementById("consulted by").value= params;
        resetTranscript()
        }
    },

    {
        command: ['premedication *'],
        callback: function (params) {
        document.getElementById("premedication").value= params;
        resetTranscript()
        }
    },

    {
        command: ['esophagus *','oesophagus *'],
        callback: function (params) {
        document.getElementById("esophagus").value= params;
        resetTranscript()
        }
    },

    {
        command: ['stomach *'],
        callback: function (params) {
        document.getElementById("stomach").value= params;
        resetTranscript()
        }
    },

    {
        command: ['duodenum *','duodenum *','devadanam *'],
        callback: function (params) {
        document.getElementById("duodenum").value= params;
        resetTranscript()
        }
    },

    {
        command: ['impression *'],
        callback: function (params) {
        document.getElementById("impression").value= params;
        resetTranscript()
        }
    },

    {
        command: ['remarks *','remark *'],
        callback: function (params) {
        document.getElementById("remarks").value= params;
        resetTranscript()
        }
    }

    
    
  ]

  const { transcript, resetTranscript } = useSpeechRecognition({ commands })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }


  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      if (flag === 1) {
        console.log("Start Listening");
        resetTranscript()
        SpeechRecognition.startListening({ continuous: true })
        flag = 0
      }

      else if (flag === 0) {
        console.log("Stop Listening");
        SpeechRecognition.stopListening()
        resetTranscript()
        flag = 1
      }
    }
}

  return (
    <div>
      <p>{message}</p>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone