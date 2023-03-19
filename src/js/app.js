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
     
  const { name, level, ...data } = object;      

  for ( let prop in data ) {
    let objItem = {
      key: prop,
      value: data[prop],
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
 