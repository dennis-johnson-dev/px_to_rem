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
  var rules = css.stylesheet.rules;
  // find html styles and check if font-size is a declaration  
  // add if statement to determine if html is even in the sheet before parsing
  
  // if any of the declarations of html selector have a font-size property,
  // adjust the value to our root percentage
  for (rule in rules) {
    for (selector in rules[rule].selectors) {
      if (rules[rule].selectors[selector] == 'html') {
        for (declaration in rules[rule].declarations) {
          if (rules[rule].declarations[declaration].property == 'font-size') {
            rules[rule].declarations[declaration].value = '62.5%';
          }
        }
      }
    }
  }
  return css;
}

function convert(data) {
      var html_data = HTML(data);
      var html_parsed = stringify(html_data);
      // console.log(html_parsed);

      // add the html style to set root of font sizes
			// var raw_data = data;
			var raw_data = html_parsed;
			var processed_data; 
 			var regexPattern = /(font-size:) (\d+)(px)/gi; 

			// pull out the px units and replace with rem units
			processed_data = raw_data.replace(regexPattern, parseString);  
      return processed_data + '\n';
}

exports.convert = convert;
