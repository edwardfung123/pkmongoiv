(function(w, $){
  var $name = $('#search_pokemon_name');
  var $pid = $('#pokemon_id');
  var $cp = $('#search_cp');
  var $hp = $('#search_hp');
  var $dust = $('#search_dust');
  var $powered = $('#search_powered');
  var $btn = $('#calculatebtn');
  var $max = $('#possibleCombinationsStringmax');
  var $avg = $('#possibleCombinationsStringavg');
  var $min = $('#possibleCombinationsStringmin');
  var re = /(\d+\.\d)%/;

  function getNumber($ele){
    var match = re.exec($ele.text());
    //console.log($ele.text());
    if (!match){ return null; }
    return parseFloat(match[1], 10).toFixed();
  }

  var i = 0;
  w.getOne = function(pkmon){
    var name = pkmon[0];
    var cp = pkmon[1];
    var hp = pkmon[2];
    var dust = pkmon[3];
    var powered = pkmon[4];
    var pid = pkmon[5];
    $name.val(name);
    $cp.val(cp);
    $hp.val(hp);
    $dust.val(dust);
    $powered.val(powered);
    $pid.val(pid);
    $btn.trigger('click');
    return [ getNumber($min), getNumber($avg), getNumber($max) ];
  };

  w.getAll = function(pkmons){
    //return JSON.stringify(pkmons);
    //return JSON.stringify(_.range(0, 100, 1));
    return _.map(pkmons, getOne);
    
  };

  w.getOneAsyn = function(pkmon){
    var name = pkmon[0];
    var cp = pkmon[1];
    var hp = pkmon[2];
    var dust = pkmon[3];
    var powered = pkmon[4];
    var pid = pkmon[5];
    $name.val(name);
    $cp.val(cp);
    $hp.val(hp);
    $dust.val(dust);
    $powered.val(powered);
    $pid.val(pid);
    $btn.trigger('click');
    //console.log($min.text());
    setTimeout(function(){
      //console.log($min.text());
      w.callPhantom([ getNumber($min), getNumber($avg), getNumber($max) ]);
      i++;
      if (i < pkmons.length){
        w.getOne(pkmons[i]);
      } else {
        //console.log('all done');
      }
    }, 1000);
  };

  w.getAllAsyn = function(pkmons){
    i = 0;
    w.getOneAsyn(pkmons[0]);
    //return JSON.stringify(pkmons);
    //return JSON.stringify(_.range(0, 100, 1));
    //return _.map(pkmons, getOne)
    
  };

})(window, jQuery);
