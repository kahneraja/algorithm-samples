"use strict";
module.exports = function (){

  this.queue = [];

  this.print = function(node){
    this.queue.push(node);
    while(this.queue.length){
      let _node = this.queue.shift();
      process.stdout.write(_node.id);
      for(let i = 0; i < _node.nodes.length; i++){
        this.queue.push(_node.nodes[i]);
      }
    }
  };
  
};
