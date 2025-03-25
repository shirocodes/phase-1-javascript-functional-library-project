
// function myEach(collection, callback) {
//     if (Array.isArray(collection)) {
//       for (const item of collection) { 
//         callback(item);
//       }
//     } else if (collection && typeof collection === "object") {
//       for (const value of Object.values(collection)) {
//         callback(value);
//       }
//     }
//     return collection;
//   }
 
        //I could also use forEach() and or the above for..of or still use below
  function myEach(collection, callback) {
    if (!collection || typeof collection !== "object") return collection; // Prevents errors
  
    (Array.isArray(collection) ? collection : Object.values(collection)).forEach(callback);
  
    return collection;
  }

//   function TWO: myMap()
function myMap(collection, callback) {
    if(!collection || typeof collection !== "object") return [];
    return Array.isArray(collection) ? collection.map(callback) 
    :Object.values(collection).map(callback);
}

// function TWO: myReduce()
function myReduce(collection, callback, acc) {
    if (!collection || typeof collection !== "object") return acc !== undefined ? acc: 0
        //NB: My js version rejected a nullish coalescing operator ?? in return acc ?? 0 
    let values = Array.isArray(collection) ? [...collection] : Object.values(collection);
      //because of the shift() thats modiying original, I have used the spread operator above
    let hasInitialAcc = acc !== undefined;
  
    return values.reduce((accumulator, currentValue) => 
      callback(accumulator, currentValue, collection), hasInitialAcc ? acc : values.shift());
  }

// function THREE: myFind()
function myFind(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
  
    for (let item of values) {
      if (callback(item)) return item; // Stop and return when found
    }
    return undefined; // Return undefined if nothing found
  }

// function four : myFilter
// function myFilter(collection, callback) {
//     let values = Array.isArray(collection) ? collection : Object.values(collection);
//         //The test case provides an object as input.
//         //We need to iterate over its values, not keys - thats why i declared above variable
//     let filteredArray = [];
  
//     for (let item of values) {
//       if (callback(item)) filteredArray.push(item);
//     }
  
//     return filteredArray;
//   }

  //In a more optimized manner, I could handle the above code using .filter method
  function myFilter(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.filter(callback);
  }

//function FIVE: mySize
function mySize(collection) {
    return Array.isArray(collection) ? collection.length: Object.keys(collection).length}

//function SIX: myFirst myLast
function myFirst(array, n=1) {
    return n === 1? array[0] : array.slice(0, n)
}

function myLast(array, n=1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n)
}

//function EIGHT/NINE 
function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  
  
  