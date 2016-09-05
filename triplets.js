module.exports = function (){

  this.compare = function(tripletA, tripletB){
    var result = [0,0];
    for (var i = 0; i < tripletA.length; i++) {
      if (tripletA[i] > tripletB[i]){
        result[0]++;
      } else if (tripletA[i] < tripletB[i]){
        result[1]++;
      }
    }
    return result;
  };
};
