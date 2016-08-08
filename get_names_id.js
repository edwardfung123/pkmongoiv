var _ = require('underscore');
var pkmons = require('./dropdownnames.json');

var ret = _.chain(pkmons).filter(function(pkmon){
  return pkmon.lang == 7;
}).map(function(pkmon){
  return [pkmon.name, pkmon.pid];
}).value();
//console.log(ret);
_.each(ret, function(pkmon){
  console.log(pkmon.join('\t'));
});
