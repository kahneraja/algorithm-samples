"use strict";
module.exports = function (){

  this.print = function(node, indentation){

    for(let i = 0; i < node.nodes.length; i++){
      this.print(node.nodes[i], indentation + 1);
    }
    console.log(Array(indentation * 2).join(" ") + node.id);
  };

  this.calculate = function(node){
    if (node.operation === "-1")
      return this.calculate(node.nodes[0]) * -1;
    else if (node.operation) {
      let value = this.calculate(node.nodes[0]);
      for(let i = 1; i < node.nodes.length; i++){
        if(node.operation === "+")
          value += this.calculate(node.nodes[i]);
        else if (node.operation === "-")
          value -= this.calculate(node.nodes[i]);
      }
      return value;
    } else {
      return parseInt(node.value);
    }
  };

};
