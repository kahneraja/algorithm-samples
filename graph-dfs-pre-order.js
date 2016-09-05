"use strict";
module.exports = function (){

  this.traverse = function(node){
    let count = 1;
    for(let i = 0; i < node.nodes.length; i++){
      count += this.traverse(node.nodes[i]);
    }
    return count;
  };

  this.print = function(node, indentation){
    console.log(Array(indentation * 2).join(" ") + node.id);
    for(let i = 0; i < node.nodes.length; i++){
      this.print(node.nodes[i], indentation + 1);
    }
  };

};
