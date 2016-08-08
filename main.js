var page = require('webpage').create();
var _ = require('./node_modules/underscore/underscore.js');
var pkmons = require('./pkmons.json');

page.onError = function(msg, trace) {

  var msgStack = ['ERROR: ' + msg];

  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
    });
  }

  console.error(msgStack.join('\n'));

};

page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};

var finished = 0;

page.onCallback = function(data) {
    console.log('CALLBACK: ' + JSON.stringify(data));
    // Prints 'CALLBACK: { "hello": "world" }'
    pkmons[finished].iv = data;
    finished++;
    if (finished == pkmons.length){
      phantom.exit();
    };
};

page.open('https://pokeassistant.com/main/ivcalculator', function(status) {
  console.log("Status: " + status);
  if (status == 'success'){
    console.log('Inject js');

    if (page.injectJs('patch.js') && page.injectJs('./node_modules/underscore/underscore.js')){
      console.log('Get All ivs');
      var ivs = page.evaluate(function(pkmons){
        return window.getAll(pkmons);
      }, pkmons);
      _.each(ivs, function(iv, i){
        pkmons[i][6] = iv;
      });
      //console.log(ivs);
      //page.render('screenshot.jpeg', {format: 'jpeg', quality: '100'});
      _.each(pkmons, function(p, i){
        console.log(JSON.stringify(p));
      });
      phantom.exit();
    }
  } else {
    phantom.exit();
  }
});
