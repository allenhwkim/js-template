# js-template
Rewritten and Improved John Resig's micro javascipt template

js-template is based on John Resig's microTemplate function. However the orinal version has got to be improved.

  - No error with single quote
  - Better error message wth line number
  - Whitespace as the same as template, no more single line output 
  - Less undefined variable errors

Install
-------

    npm install js-template

Example
--------

    var jsTemplate = require('js-template');
    var templateHtml = "Hello <b><%= world %></b>";
    var data = {world: "You!!"};
    var output = jsTemplate(templateHrml, data);
    console.log(output); // Hello <b>You!!</b>


