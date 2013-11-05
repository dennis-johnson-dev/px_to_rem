var fs = require('fs');

function convert(msg) {
  fs.readFile('./' + msg, 'utf8', function (err, data) {
    var raw_data = data;
    var search_string = "font-size";
    var font_index = raw_data.indexOf(search_string);
    var semi_colon = raw_data.indexOf(";", font_index);
    var substring = raw_data.substring(font_index, semi_colon);
    var regexPattern = /(font-size: \d+)/g; 
    var numerical_string = substring.match(regexPattern) + "\n";
  
    fs.writeFile('style_new.css', numerical_string, function (err) {
      if (err) throw err;
      console.log('It\'s saved!'); 
    });
  
    console.log(numerical_string);
    /*
    var pixel_end = substring.indexOf("p"); 
    substring = substring.substring(numerical_string.index, pixel_end);
    console.log(substring);
    */
  }); 
}

exports.convert = convert;
