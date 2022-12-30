function getLastElementOfProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    let array = obj[property]
    if(!Array.isArray(array)){
      return undefined;
    }
    return array[array.length-1]; 
  }