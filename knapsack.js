"use strict";
module.exports = function (){

  this.valueMatrix = [];
  this.keepMatrix = [];

  this.setup = function(items, maxWeight){
    this.valueMatrix = new Array(maxWeight);
    for(let row = 0; row < items.length; row++){
      this.valueMatrix[row] = new Array(maxWeight);
    }
    for(let row = 0; row < items.length; row++){
      this.keepMatrix[row] = new Array(maxWeight);
    }
  };

  this.pack = function(items, maxWeight){
    this.setup(items, maxWeight);
    for(let row = 0; row < items.length; row++){
      for(let col = 0; col < maxWeight; col++){
        const maxWeight = col + 1;
        const weight = items[row].Weight;
        const newValue = items[row].Value;

        this.valueMatrix[row][col] = 0;
        this.keepMatrix[row][col] = false;

        // does the current item's weight fit?
        if (weight <= maxWeight) {
          this.valueMatrix[row][col] = newValue;
          this.keepMatrix[row][col] = true;
        }

        // is this better that what we had?
        if (row > 0){
          const prevValue = this.valueMatrix[row-1][col];
          if (prevValue > newValue){
            this.valueMatrix[row][col] = prevValue;
            this.keepMatrix[row][col] = false;

            // is there a possible remainder?
            const remainder = maxWeight - weight;
            if (remainder > 0){
              const remainderValue = this.valueMatrix[row-1][remainder - 1];
              const combinedValue = remainderValue + newValue;
              if (combinedValue > this.valueMatrix[row][col]){
                this.valueMatrix[row][col] = combinedValue;
                this.keepMatrix[row][col] = true;
              }
            }
          }
        }
      }
    }


    let packedItems = [];

    let i = items.length;
    let w = maxWeight;
    while(i > 0){
      const match = this.keepMatrix[i-1][w-1];
      if (match){
        packedItems.push(items[i-1].Name);
        w = w - items[i-1].Weight;
      }
      i = i - 1;
    }

    return packedItems;
  };

};
