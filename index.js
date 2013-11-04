var fs = require('fs');

function convert(msg) {
  fs.readFile('./' + msg, 'utf8', function (err, data) {
    var raw_data = data;
    var search_string = "font-size";
    var font_index = raw_data.indexOf(search_string);
    var semi_colon = raw_data.indexOf(";", font_index);
    var substring = raw_data.substring(font_index, semi_colon);
    var regexPattern = /\d{2}/; 
    var numerical_string = substring.match(regexPattern);
    var digit = numerical_string[0]/10;
    console.log(digit + "rem;");
  }); 
}

exports.convert = convert;
