var fs = require('fs');

function parseString(match, css_style, amount, unit) {
  // Convert amount string to an integer, divide it by 10, and 
  // convert amount back to a string
  amount = ((parseInt(amount, 10))/10).toString();
  unit = "rem";
  match = "font-size:";

  return match + " " + amount + unit;
} 

function findHTML(input) {
  if (input.search("html") == -1) {
    // html style was not found, need to add it 
    var html_style = "html {\n  font-size: 62.5%;\n}\n\n";
    input = html_style + input; 
    return input; 
  } else {
    // testing new regex for html-font sizes
    var matches = input.match(/(html)(.*)({\n)(.*)(font-size:)(.*)(\d+)/g);  
    console.log(matches);

    return input;
  }
}
				 
function convert(msg) {
  fs.readFile('./' + msg, 'utf8', function (err, data) {
      if (err) { 
        console.log("File couldn't be found or opened"); 
        return err;
      }

      // add the html style to set root of font sizes
			var raw_data = findHTML(data);
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
