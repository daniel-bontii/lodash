let _ = {
    clamp(number, lower, upper){
      //option 1
     /* let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue; */
  
      //option 2
      let numToReturn;
      if(number < lower ){
        numToReturn = lower;
      }else if(number > lower && number < upper){
        numToReturn = number;
      }else if(number > upper){
        numToReturn = upper;
      }
      return numToReturn;
    },
  inRange(number, start, end){
      if(typeof end === 'undefined'){
        end = start;
        start = 0;
      }
      if(start > end){
        let temp = end;
        end = start;
        start = temp;
      }
      const isInRange = start <= number && number < end;
      return isInRange;
    },
    words(string){
      let words = string.split(' ');
      return words;
    },  
    pad(string, length){
      const stringLength = string.length
      if(length <= stringLength){
        return string;
      }
    const startPaddingLength = Math.floor((length - stringLength)/2);
   const endPaddingLength = length - stringLength - startPaddingLength;
   let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  
    return paddedString;
    },
    has (object, key) {
      const hasValue = object[key];
      if(hasValue !== undefined){
        return true;
      }else{
        return false;
      }
  
      return hasValue;
    },
    invert(object){
      let invertedObject = {};
      for(let key in object){
         invertedObject[object[key]] = key;
       // invertedObject = {originalValue:key}
      }
      return invertedObject;
    },
    findKey(object, predicate){
      for(let key in object){
        const value = object[key];
        const predicateReturnValue = predicate(value);
        if(predicateReturnValue ){
          return key;
        } 
      }
        return undefined;
    },
    drop(array, n){
      if(n === undefined){
        n = 1;
      }
      const droppedArray = array.slice(n);
      return droppedArray;
    },
    dropWhile(array, predicate){
        const callback=  (element, index) =>{
        return !predicate(element, index, array);
      }
      const dropNumber = array.findIndex(callback);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk(array, size){
      if(size === undefined){
        size = 1;
      }
      let arrayChunks = [];
      for(let i=0; i<array.length; i+=size){
        arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  }
  
  // Do not write or modify code below this line.
  module.exports = _;