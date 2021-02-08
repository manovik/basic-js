class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    this.asciiModule = 65;
    this.mod = 26;
    this.generateDecodeArray
  }

  encrypt(message, key) {
    const upMessage = message.toUpperCase().split('');
    const arr = [];
    let upKey = key.toUpperCase();

    while(upKey.length < message.length) {
      upKey += upKey
    }

    upKey = upKey.substring(0, message.length);
    
  for(let i = 0; i < upMessage.length; i++) {
    if(upMessage[i][0].match(/[A-Z]/)) {
      generateEncodeArray(i, this.mod, this.asciiModule);
    } else {
      arr.push(upMessage[i][0]);
      upKey = upKey.slice(0, i) + upMessage[i][0] + upKey.slice(i);
    }
  }
    function generateEncodeArray(iterator, mod, asciiModule) {
      let pi = upMessage[iterator].charCodeAt(0) - asciiModule;
      let ki = upKey.charCodeAt(iterator % upKey.length) - asciiModule;
      
      let midResult = pi + ki;

      if (midResult < 0) {
        midResult = midResult + mod
      } else if (midResult > 25) {
        midResult = midResult - mod; 
      }

      arr.push(String.fromCodePoint( midResult + asciiModule ) );
    }
    return this.bool === true ? arr.join('') : arr.reverse().join('');
  }

  

  decrypt(message, key) {
    const upMessage = message.toUpperCase().split('');
    const arr = [];
    let upKey = key.toUpperCase();
    
    while(upKey.length < message.length) {
      upKey += upKey
    }
    for(let i = 0; i < upMessage.length; i++) {
      if(upMessage[i][0].match(/[A-Z]/)) {
        generateDecodeArray(i, this.mod, this.asciiModule);
      } else {
        arr.push(upMessage[i][0]);
        upKey = upKey.slice(0, i) + upMessage[i][0] + upKey.slice(i);
      }
    }
    
    function generateDecodeArray(iterator, mod, asciiModule) {
      let midResult;
      let ci = upMessage[iterator].charCodeAt(0) - asciiModule;
      let ki = upKey.charCodeAt(iterator % upKey.length) - asciiModule;
      midResult =  ci + mod - ki;

      if (midResult < 0) {
        midResult = midResult + mod
      } else if (midResult > 25) {
        midResult = midResult - mod; 
      }

      arr.push(
        String.fromCodePoint( midResult + asciiModule )
      );
    }
  
    return this.bool === true ? arr.join('') : arr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
