var fs = require('fs');
var parse = require('css-parse');
var value = require('css-value');
var stringify = require('css-stringify');

function parseString(match, css_style, amount, unit) {
  // Convert amount string to an integer, divide it by 10, and 
  // convert amount back to a string
  amount = ((parseInt(amount, 10))/10).toString();
  unit = "rem";
  match = "font-size:";

  return match + " " + amount + unit;
} 

function HTML(input) {
  var css = parse(input); 
  // find html styles and check if font-size is a declaration  
  for (rule in css.stylesheet) {
    // console.log(css.stylesheet[rule]); 
  }
  return css;
}

function convert(data) {
      /*
      var html_data = HTML(data);
      var html_parsed = stringify(html_data);
      console.log(html_parsed);
      console.log(data);
      */

      // add the html style to set root of font sizes
			var raw_data = data;
			var processed_data = "html {\n  font-size: 12px;\n}";
			var regexPattern = /(font-size:) (\d+)(px)/gi; 

			// pull out the px units and replace with rem units
      /*
			processed_data = raw_data.replace(regexPattern, parseString);  
      */
      return processed_data;
}

exports.convert = convert;
