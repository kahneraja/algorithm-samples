"use strict";
module.exports = function (){

  this.buildGraph = function(id, cities){
    let nodes = [];

    for(let i = 0; i < cities.roads.length; i++){
      if (cities.roads[i].start === id){
        let road = cities.roads[i];
        let node = {
          id: road.end,
          distance: road.distance,
          nodes: []
        };
        node.nodes = this.buildGraph(node.id, cities);
        nodes.push(node);
      }
    }

    return nodes;
  };

  this.comboStack = [];

  this.print = function(node, parentStack){
    if (node.nodes.length){
        parentStack.push(node.distance);
    } else {
      let combo = parentStack.concat(node.distance);
      this.comboStack.push(combo);
    }

    for(let i = 0; i < node.nodes.length; i++){
      this.print(node.nodes[i], parentStack.slice(0));
    }
  };

  this.go = function(cities){
    let node = {
      id: "-",
      distance: 0
    };
    node.nodes = this.buildGraph(0, cities);
    this.print(node, []);

    let min = this.comboStack[0].reduce((a, b) => a + b, 0);
    for(let i = 1; i < this.comboStack.length; i++){
      let distance = this.comboStack[i].reduce((a, b) => a + b, 0);
      if (distance < min)
        min = distance;
    }
    return min;
  };

};
