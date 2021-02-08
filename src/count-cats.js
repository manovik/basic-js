module.exports = function countCats(arr) {
  let number = 0;

  arr.forEach(i => {
    if (!(typeof(i) === 'object')){
      return number;
    }
    i.forEach(j => {
      if(j === "^^"){
        ++number;
      } else {
        return number;
      }
    });
  });
  return number;
};
