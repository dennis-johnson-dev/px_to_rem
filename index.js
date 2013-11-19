var fs = require('fs');
var parse = require('css-parse');
var value = require('css-value');

function parseString(match, css_style, amount, unit) {
  // Convert amount string to an integer, divide it by 10, and 
  // convert amount back to a string
  amount = ((parseInt(amount, 10))/10).toString();
  unit = "rem";
  match = "font-size:";

  return match + " " + amount + unit;
} 

function convert(msg) {
  fs.readFile('./' + msg, 'utf8', function (err, data) {
      if (err) { 
        console.log("File couldn't be found or opened"); 
        return err;
      }

			console.log(typeof data);

      // add the html style to set root of font sizes
			var raw_data = data;
			var processed_data;
			var regexPattern = /(font-size:) (\d+)(px)/gi; 

			// pull out the px units and replace with rem units
			processed_data = raw_data.replace(regexPattern, parseString);  

			fs.writeFile('./style_new.css', processed_data, function(err) {
				if (err) { 
					console.log("File couldn't be saved");
					return err; 
				}
				console.log("Party Onward with rem units :)");
			}); 

  }); 
}

exports.convert = convert;
