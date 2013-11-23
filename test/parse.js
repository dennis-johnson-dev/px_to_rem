var should = require('../node_modules/should/index.js');

var parse = require('../index.js'), 
  fs = require('fs'), 
  path = require('path'),
  read = fs.readFileSync, 
  readdir = fs.readdirSync;

describe('parse.convert(str)', function(){
  readdir('test/cases').forEach(function(file) {
    if (~file.indexOf('_t')) return true; 
    file = path.basename(file, '.css');
    it('should parse ' + file + '.css', function(){
			var css = read(file + '.css', 'utf8');
      // console.log(css);
			var css_t = read(path.join('test', 'cases', file + '_t.css'), 'utf8');
      // console.log(css_t);
      var ret = parse.convert('style.css');
      ret.should.equal(css_t);
    }) 
  });
})
