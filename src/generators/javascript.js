/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {javascriptGenerator, Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const color =
    generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffffff'";

  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  textEl.style.color = color;
  outputDiv.appendChild(textEl);
}`,
  );
  // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};

forBlock['print'] = function(block, generator) {
  var value = generator.valueToCode(block, 'Value', Order.ATOMIC);

  var code = 'console.log(' + value + ');\n';
  return code;
};

forBlock['fetch_url'] = function(block, generator) {
  var value_url = generator.valueToCode(block, 'URL', Order.ATOMIC);
  var dropdown_rest_method = block.getFieldValue('Rest_Method');
  var checkbox_resultdownload = block.getFieldValue('ResultDownload') === 'TRUE';
  var statements_header = generator.statementToCode(block, 'Header');
  var statements_datasections = generator.statementToCode(block, 'DataSections');
  var statements_then = generator.statementToCode(block, 'Then');
  var statements_catcherror = generator.statementToCode(block, 'IfError');

  var headersArray = statements_header.trim().split('\n').filter(header => header.trim() !== '');
  var headersCode = headersArray.map(header => header.trim()).join(', ');

  var bodyArray = statements_datasections.trim().split('\n').filter(section => section.trim() !== '');
  var bodyCode = bodyArray.map(section => section.trim()).join(', ');


  // Assemble javascript into code variable
  var code = `
fetch(${value_url}, {
  method: '${dropdown_rest_method}',
  ${headersCode ? 'headers: {' + headersCode.trim() + ' },' : ''}
  ${checkbox_resultdownload ? 'credentials: "include",' : ''}
  ${statements_datasections ? 'body: JSON.stringify({' + bodyCode + '})' : ''}
})
.then(response => {
  return response.json();
})
.then(data => {
  ${statements_then.trim()}
}
.catch(error => {
  ${statements_catcherror}
});
`.trim();

  code = code.split('\n').filter(line => line.trim() !== '').join('\n');

  return code;
};

forBlock['header_block'] = function(block, generator) {
  var text_headerkey = block.getFieldValue('HeaderKey');
  var value_headervalue = generator.valueToCode(block, 'HeaderValue', Order.ATOMIC);

  var code = `"${text_headerkey}": ${value_headervalue}\n`;
  return code;
};

forBlock['body_data'] = function(block, generator) {
  var text_bodydata = block.getFieldValue('BodyData');
  var text_bodyvalue = generator.valueToCode(block, 'BodyValue', Order.ATOMIC);

  var code = `"${text_bodydata}: ${text_bodyvalue}"\n`;
  return code;
};

forBlock['response_status'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'response.status';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.ATOMIC];
};

forBlock['response_data'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'response.json()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.ATOMIC];
};

forBlock['trycatch'] = function(block, generator) {
  var statements_try = generator.statementToCode(block, 'TRY');
  var statements_iferror = generator.statementToCode(block, 'IFERROR');
  
  var code = `try {
  ${statements_try.trim()}
} catch (error) {
  ${statements_iferror.trim()}
}`;
  return code;
};

forBlock['error'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'error';
  return [code, Order.ATOMIC];
};

forBlock['connectwebsocket'] = function(block, generator) {
  var value_url = generator.valueToCode(block, 'URL', Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `new WebSocket(${value_url})`;
  return [code, Order.ATOMIC];
};

forBlock['socketlistener'] = function(block, generator) {
  var variable_socket_var = generator.getVariableName(block.getFieldValue('socket_var'));
  var dropdown_option = block.getFieldValue('Option');
  var statements_code = generator.statementToCode(block, 'code');
  // TODO: Assemble javascript into code variable.
  var code = `${variable_socket_var}.addEventListener("${dropdown_option}", (event) => {
    ${statements_code}
  });\n`;
  return code;
};