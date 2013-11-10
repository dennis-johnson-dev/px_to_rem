var fs = require('fs');

function convert(msg) {
  fs.readFile('./' + msg, 'utf8', function (err, data) {
    var raw_data = data;
    var processed_data;
    var regexPattern = /(font-size:) (\d+)(px)/gi; 

    function parseString(match, css_style, amount, unit) {
      amount = parseInt(amount, 10);
      amount = amount/10;
      amount = amount.toString();
      unit = "rem";
      match = "font-size:";
 
      return match + " " + amount + unit;
    } 
		 
    // pull out the px units and replace with rem units
    processed_data = raw_data.replace(regexPattern, parseString);  

 		fs.writeFile('./style_new.css', processed_data, function() {
			console.log("Party Onward with rem units :)");
    }); 
  }); 
}

exports.convert = convert;
