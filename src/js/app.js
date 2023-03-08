const obj = {
  name: 'мечник', 
  health: 10, 
  level: 2, 
  attack: 80, 
  defence: 40
}

const objSortRules = ["name", "level"];

const arrPropKeys = [];

const orderByProps = function(object, sortRules) { 
  for ( const prop in object ) {
    for (let i = 0; i < sortRules.length; i++) {
      if (object.hasOwnProperty(prop)) {
        let objItem = {}; 
        objItem.item = `key: ${sortRules[i]}, value: ${object.prop}`;
        arrPropKeys.push(objItem);
        console.log(objItem);
        console.log(arrPropKeys);
        
      } 
     
    }
    return 
  } 
      //  return
      const { prop, ...data } = object;
      console.log(data);
}


orderByProps(obj, objSortRules);

// [
//   {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//   {key: "level", value: 2}, // порядок взят из массива с ключами
//   {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//   {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//   {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
// ]