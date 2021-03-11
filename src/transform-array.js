module.exports = function transform(arr) {
  const oldArr = [...arr];
  const newArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < oldArr.length; i++) {
      switch (oldArr[i]) {
        case "--discard-next":
          if (i < oldArr.length) {
            newArr.push(undefined);
            i += 1;
          }
          break;
        case "--discard-prev":
          if (i > 0) {
            newArr.pop();
          }
          break;
        case "--double-next":
          if (i < oldArr.length - 1) {
            newArr.push(oldArr[i + 1]);
          }
          break;
        case "--double-prev":
          if (i > 0) {
            newArr.push(newArr[newArr.length - 1]);
          }
          break;
        default:
          newArr.push(oldArr[i]);
      }
    }
    return newArr.filter((item) => item !== undefined);
  }
  throw new Error("not array");
};
