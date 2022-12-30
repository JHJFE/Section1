function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];
    // TODO: 여기에 코드를 작성합니다.
    if(Array.isArray(arrProperty) && arrProperty.length > index ){
      return arrProperty[index];
    }
      return undefined;
  }
  