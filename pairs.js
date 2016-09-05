module.exports = function (){

  this.findPairs = function(items, divider){
    var result = 0;
    for(var i = 0; i < items.length; i++){
      for(var j = 0; j < items.length; j++){
        if (i === j)
          continue;
        var leftItem = items[i];
        var rightItem = items[j];
        if (i < j)
          if ((leftItem + rightItem) % divider === 0)
            result++;
      }
    }
    return result;
  };
};
