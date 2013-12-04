px_to_rem
Dennis Johnson
10/22/13

<img src="https://travis-ci.org/songawee/px_to_rem.png?branch=master" />

## Px_to_REM

  Utility for converting font-size css styles using px units to rem

## Usage

````javascript
  var px_to_rem = require('px_to_rem');
  var css = "h1 { \n font-size: 12px;\n }";
  
  var output = px_to_rem.convert(css);
  
  console.log(output);
````

## Command Line Tool

  Also included is a command line tool that takes a css file as an argument
  
````
  $ ./px_to_rem style.css
````
