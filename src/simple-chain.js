const chainMaker = {
  _arr: [],
  getLength() {
    return this._arr.length;
  },
  addLink(value = '( )') {

    this._arr.push(String(`( ${value} )`));
    return this;
  },
  removeLink(position) {
    if (position > 0) {
      this._arr.splice(position - 1, 1);
      return this;
    } else {      
      this._arr.length = 0;
      throw new Error (`Position "${position}" is incorrect!`);
    }
  },
  reverseChain() {
    this._arr.reverse();
    return this;
  },
  finishChain() {
    let finalArr = [...this._arr];
    this._arr.length = 0;
    return finalArr.join('~~');
  }
};

module.exports = chainMaker;