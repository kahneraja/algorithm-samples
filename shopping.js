var Shopping = function (){

   var self = this;

   self.distanceTo = function (id){
     if (this.id == id)
       return 0;
     else {
       var distance = 0;
       for(var x = 0; x < this.roads.length; x++){
         var road = this.roads[x];
         console.log(road);
         distance = road.distance + road.end.distanceTo(id);
       }

       console.log('distance ' + this.id + ' to ' + id + ' : ' + distance);
       return distance;
     }
   };

   self.parseShoppingData = function (input){
     var lines = input.split('\n');
     var overview = lines[0].split(' ');
     var numberOfCentres = parseInt(overview[0]);
     var numberOfRoads = parseInt(overview[1]);
     var numberOfTypesOfFish = parseInt(overview[2]);
     var targetCentreId = numberOfCentres;

     var district = {
       centres: []
     };

     for (var i = 0; i < numberOfCentres; i++) {
       var products = lines[i + 1].split(' ');
       products.shift();
       var centre = {
         id: i,
         products: products,
         roads: [],
         distanceTo: self.distanceTo
       };
       district.centres.push(centre);
     }

     for (var i = 0; i < numberOfRoads; i++) {
       var roadSummary = lines[numberOfCentres + i + 1].split(' ');
       var startIndex = parseInt(roadSummary[0]);
       var endIndex = parseInt(roadSummary[1]);
       var distance = parseInt(roadSummary[2]);

       var road = {
         start: district.centres[startIndex],
         end: district.centres[endIndex],
         distance: distance
       }
       district.centres[startIndex - 1].roads.push(road);
     }
     console.log(district);
     return district;
   }
};

module.exports = Shopping;
