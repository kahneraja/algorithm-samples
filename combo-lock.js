"use strict";
module.exports = function (){

  this.setupCombinationTree = function(node, possibleValues, level){
    let nodes = [];
    for(let i = 0; i < possibleValues.length; i++){

      let child = {
        value: possibleValues[i],
        nodes: []
      };

      if (level > 1){
        child.nodes = this.setupCombinationTree(child, possibleValues, level-1);
      }

      nodes.push(child);
    }
    return nodes;
  };

  this.comboStack = [];

  this.print = function(node, parentStack){
    if (node.nodes.length){
        parentStack.push(node.value);
    } else {
      let combo = parentStack.concat(node.value);
      this.comboStack.push(combo);
    }

    for(let i = 0; i < node.nodes.length; i++){
      this.print(node.nodes[i], parentStack.slice(0));
    }
  };

  this.try = function(slots){
    let node = {
      value : "-"
    };
    node.nodes = this.setupCombinationTree({}, [0,1,2,3,4,5,6,7,8,9], slots);
    this.print(node, []);
    return this.comboStack;
  };

};
