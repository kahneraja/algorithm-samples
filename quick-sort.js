"use strict";
module.exports = function (){
  this.level = 0;
  this.queue = [];

  this.sort = function(items){
    if (!items.length)
      return [];

    const pivot = items[0];
    let left = [];
    let right = [];
    for(let i = 1; i < items.length; i++){
      var item = items[i];
      if (item > pivot)
        right.push(item);
      if (item < pivot)
        left.push(item);
    }
    return this.sort(left).concat(pivot, this.sort(right));
  };

  this.merge = function(left, right){
    var totalItemCount = left.length + right.length;
    var result = [];
    let j = 0;
    let k = 0;
    for(let i = 0; i < totalItemCount; i++){
      console.log(i + " " + left[j] + " || " + right[k]);
      if (!right[k] || left[j] < right[k]){
        result.push(left[j]);
        j++;
      }
      else{
        result.push(right[k]);
        k++;
      }
    }
    return result;
  };
};
