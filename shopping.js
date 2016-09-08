"use strict";
module.exports = function (){

  this.parseShoppingData = function (input){
    const lines = input.split("\n");
    const overview = lines[0].split(" ");
    const numberOfCentres = parseInt(overview[0]);
    const numberOfRoads = parseInt(overview[1]);
    const numberOfTypesOfFish = parseInt(overview[2]);
    const targetCentreId = numberOfCentres;

    let district = {
      centres: []
    };

    for (let i = 0; i < numberOfCentres; i++) {
      let products = lines[i + 1].split(" ");
      products.shift();
      let centre = {
        id: i + 1,
        products: products,
        roads: [],
        distanceTo: this.distanceTo,
        isVisited: false
      };
      district.centres.push(centre);
    }

    for (let i = 0; i < numberOfRoads; i++) {
      let roadSummary = lines[numberOfCentres + i + 1].split(" ");
      let startIndex = parseInt(roadSummary[0]) - 1;
      let endIndex = parseInt(roadSummary[1]) - 1;
      let distance = parseInt(roadSummary[2]);
      let departure = {
        end: endIndex,
        distance: distance
      };
      let arrival = {
        end: startIndex,
        distance: distance
      };
      district.centres[startIndex].roads.push(departure);
      district.centres[endIndex].roads.push(arrival);
    }
    return district;
  };

  this.visitAll = function(district, start){
    if (start.isVisited)
      return 0;
    start.isVisited = true;
    let road = start.roads[0];
    let destination = district.centres[road.end];
    let distance = road.distance + this.visitAll(district, destination);
    return distance;
  };

  this.graph = function(district, centre, distance, history){
    let nodes = [];

    for(let i = 0; i < centre.roads.length; i++){
      let road = centre.roads[i];
      let nextCentre = district.centres[road.end];

      let isVisited = false;
      for(let i = 0; i < history.length; i++){
        if (history[i] === nextCentre.id)
          isVisited = true;
      }

      if (!isVisited){
        let nextDistance = distance + road.distance;
        let node = {
          id: nextCentre.id,
          distance: nextDistance,
          nodes: this.graph(district, nextCentre, nextDistance, history.concat(centre.id))
        };
        nodes.push(node);
      }
    }
    return nodes;
  };

  this.print = function(node, indentation){
    console.log(Array(indentation * 2).join(" ") + node.id + ": " + node.distance);
    for(let i = 0; i < node.nodes.length; i++){
      this.print(node.nodes[i], indentation + 1);
    }
  };
};
