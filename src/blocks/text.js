/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const print_block = {
    "type": "print",
    "message0": "Print  %1",
    "args0": [
      {
        "type": "input_value",
        "name": "Value",
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Outputs a string in the console",
    "helpUrl": ""
  }


const fetch_url = {
  "type": "fetch_url",
  "message0": "Send request to URL %1 Using method %2 With result being downloadable %3 %4 With Header %5 With data sections %6 Then %7 If error %8",
  "args0": [
    {
      "type": "input_value",
      "name": "URL"
    },
    {
      "type": "field_dropdown",
      "name": "Rest_Method",
      "options": [
        [
          "GET",
          "GET"
        ],
        [
          "POST",
          "POST"
        ],
        [
          "PUT",
          "PUT"
        ],
        [
          "DELETE",
          "DELETE"
        ],
        [
          "PATCH",
          "PATCH"
        ]
      ]
    },
    {
      "type": "field_checkbox",
      "name": "ResultDownload",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "Header"
    },
    {
      "type": "input_statement",
      "name": "DataSections"
    },
    {
      "type": "input_statement",
      "name": "Then"
    },
    {
      "type": "input_statement",
      "name": "IfError"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const header_block = {
  "type": "header_block",
  "message0": "Header %1 with value %2",
  "args0": [
    {
      "type": "field_input",
      "name": "HeaderKey",
      "text": "Key"
    },
    {
      "type": "input_value",
      "name": "HeaderValue"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const body_data = {
  "type": "body_data",
  "message0": "Body data %1 with value %2",
  "args0": [
    {
      "type": "field_input",
      "name": "BodyData",
      "text": "name"
    },
    {
      "type": "input_value",
      "name": "BodyValue",
      "text": "value"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const response_status =  {
  "type": "response_status",
  "message0": "Response status code",
  "output": Number,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const response_data = {
  "type": "response_data",
  "message0": "Response Data",
  "output": String,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const trycatch = {
  "type": "trycatch",
  "message0": "try %1 %2 if error %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "TRY"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "IFERROR"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
}

const error = {
  "type": "error",
  "message0": "error",
  "output": String,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
};

const connectwebsocket = {
  "type": "connectwebsocket",
  "message0": "Connect to websocket %1",
  "args0": [
    {
      "type": "input_value",
      "name": "URL",
      "check": "String"
    }
  ],
  "colour": 230,
  "output": String,
  "tooltip": "",
  "helpUrl": ""
};

const  socketlistener = {
  "type": "socketlistener",
  "message0": "When socket %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "socket_var",
      "variable": "var"
    },
    {
      "type": "field_dropdown",
      "name": "Option",
      "options": [
        [
          "has been opened",
          "open"
        ],
        [
          "received a message",
          "message"
        ],
        [
          "has been closed",
          "close"
        ],
        [
          "got error",
          "error"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

// Create the block definitions for the JSON-only blocks.

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  print_block,
  fetch_url,
  header_block,
  body_data,
  response_status,
  response_data,
  trycatch,
  error,
  connectwebsocket,
  socketlistener
]);
