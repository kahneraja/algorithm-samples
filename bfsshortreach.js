"use strict";

var BFSShortReach = function (){

  this.parse = function(input){
    const queries = [];
    const lines = input.split("\n");
    const totalQueries = parseInt(lines.shift());
    while (lines.length) {
      let summary = lines.shift().split(" ");
      let query = {
        nodes: parseInt(summary[0]),
        edges: {}
      };
      let edges = parseInt(summary[1]);
      let i = 0;
      while(i < edges){
        const edgeSummary = lines.shift().split(" ");
        const start = edgeSummary[0];
        const end = edgeSummary[1];
        query.edges[start] = end;
        i++;
      }
      query.start = parseInt(lines.shift());
      queries.push(query);
    }
    return queries;
  };

};

module.exports = BFSShortReach;
