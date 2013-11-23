var chai = require('chai');
chai.should();
var sinon = require('sinon');

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
			var css = read(path.join('test', 'cases', file + '.css'), 'utf8');
			var css_t = read(path.join('test', 'cases', file + '_t.css'), 'utf8');
      var ret = parse.convert(css);
      ret.should.equal(css_t);
    })
  });
})
