module.exports = 
function repeater ( str, options ) {

  const insideOptions = { 
    repeatTimes : 1, 
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  };

  if(options.addition === false) {
    options.addition = 'false';
  } else if (options.addition === null) {
    options.addition = 'null';
  }

  const newMainArr = createArray(str, 
  options.repeatTimes || insideOptions.repeatTimes);
  const newAddArr = createArray(
    options.addition || insideOptions.addition, 
    options.additionRepeatTimes || insideOptions.additionRepeatTimes);
  
  let newAddStr = newAddArr.join(options.additionSeparator || insideOptions.additionSeparator);
  
  function createArray(str, repeatTimes) {
    const arr = [];
    for (let i = 0; i < repeatTimes; i++) {
      arr.push(str);
    }
    return arr;
  }

  return newMainArr.map(i => i + newAddStr).join(options.separator || insideOptions.separator);
};