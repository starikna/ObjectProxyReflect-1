export { orderByProps };
const orderByProps = function (object, sortRules) { 
const arrPropKeys = [];
const arrPropKeysAbc = [];

  sortRules.forEach(el => {   
    for (let prop in object) {
      let objItem = {};

      if (prop === el) {
        objItem.key = el; 
        objItem.value = object[prop];
        arrPropKeys.push(objItem);  
      }
    }               
  });
     
    for (const key in object) {
      if (sortRules.includes(key)) {
        delete object[key];
      }
    }  
  
    for ( let prop in object ) {
      let objItem = {
        key: prop,
        value: object[prop],
      };
        arrPropKeysAbc.push(objItem);  
    }

  function SortArray(x, y) {
    if (x.key < y.key) {return -1};
  }

  let sortArrAbc = arrPropKeysAbc.sort(SortArray);
  const newArrObj = arrPropKeys.concat(sortArrAbc);
  return newArrObj;
}
 