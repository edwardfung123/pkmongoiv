var fs = require('fs');
var text = fs.readFileSync(process.argv[2], 'utf8');
var lines = text.split('\n');

var _ = require('underscore');
data = _.map(lines, function(l){
  return l.split('\t');
});
console.log(JSON.stringify(data));
