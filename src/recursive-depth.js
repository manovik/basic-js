module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    if(arr instanceof Array) {
      if (arr.length === 0) {
        return counter;
      }
      return counter +
             Math.max(...arr.map(nextArr => {
               return this.calculateDepth(nextArr)
             }))
    } else {
      return 0;
    }
  };
}